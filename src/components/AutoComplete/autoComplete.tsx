import React, {
  FC,
  useState,
  ChangeEvent,
  ReactElement,
  useEffect,
  useRef
} from "react";
import Input, { InputProps } from "../Input/input";
import Icon from "../Icon/icon";
import useDebounce from "../../hooks/useDebounce";
import classNames from "classnames";
import useClickOutside from "../../hooks/useClickOutside";

interface DataSourceObject {
  value: string;
}

export type DataSourceType<T = {}> = T & DataSourceObject;

export interface AutoCompleteProps extends Omit<InputProps, "onSelect"> {
  fetchSuggestions: (
    str: DataSourceType
  ) => DataSourceType[] | Promise<DataSourceType[]>;
  onSelect?: (item: DataSourceType) => void;
  renderOption?: (item: DataSourceType) => ReactElement;
}

export const AutoComplete: FC<AutoCompleteProps> = props => {
  const {
    fetchSuggestions,
    onSelect,
    value,
    renderOption,
    ...restProps
  } = props;

  const [inputValue, setInputValue] = useState(value as string);
  const [suggestions, setSugestions] = useState<DataSourceType[]>([]);
  const [loading, setLoading] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const debouncedValue = useDebounce(inputValue, 500);
  const triggerSearch = useRef(false);
  const componentRef = useRef<HTMLDivElement>(null);

  useClickOutside(componentRef, () => {
    setSugestions([]);
  });
  useEffect(() => {
    if (debouncedValue && triggerSearch.current) {
      const results = fetchSuggestions(debouncedValue);
      setLoading(true);
      if (results instanceof Promise) {
        console.log("triggered");
        results.then(data => {
          setLoading(false);
          setSugestions(data);
        });
      } else {
        setSugestions(results);
      }
    } else {
      setSugestions([]);
    }
    setHighlightIndex(-1);
  }, [debouncedValue]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setInputValue(value);
    triggerSearch.current = true;
    // if (value) {
    //   const results = fetchSuggestions(value);
    //   setLoading(true);
    //   if (results instanceof Promise) {
    //     console.log("triggered");
    //     results.then(data => {
    //       setLoading(false);
    //       setSugestions(data);
    //     });
    //   } else {
    //     setSugestions(results);
    //   }
    // } else {
    //   setSugestions([]);
    // }
  };

  const handleSelect = (item: DataSourceType) => {
    setInputValue(item.value);
    setSugestions([]);
    if (onSelect) {
      onSelect(item);
    }
    triggerSearch.current = false;
  };

  const renderTemplate = (item: DataSourceType) => {
    return renderOption ? renderOption(item) : item.value;
  };

  const generateDropdown = () => {
    return (
      <ul>
        {suggestions.map((item, index) => {
          const cnames = classNames("suggestion-item", {
            "item-highlighted": index === highlightIndex
          });
          return (
            <li
              key={index}
              onClick={() => {
                handleSelect(item);
              }}
              className={cnames}
            >
              {renderTemplate(item)}
            </li>
          );
        })}
      </ul>
    );
  };

  const hightlight = (index: number) => {
    if (index < 0) index = 0;
    if (index >= suggestions.length) {
      index = suggestions.length;
    }
    setHighlightIndex(index);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.keyCode) {
      case 13:
        if (suggestions[highlightIndex]) {
          handleSelect(suggestions[highlightIndex]);
        }
        break;
      case 38:
        hightlight(highlightIndex - 1);
        break;
      case 40:
        hightlight(highlightIndex + 1);
        break;
      case 27:
        setSugestions([]);
        break;
      default:
        break;
    }
  };
  return (
    <div className="viking-auto-complete" ref={componentRef}>
      <Input
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        {...restProps}
      />
      {loading && (
        <ul>
          <Icon icon="spinner" spin />
        </ul>
      )}
      {suggestions.length > 0 && generateDropdown()}
    </div>
  );
};

/* import { prependOnceListener } from "cluster";

interface AutoCompleteProps {
  data: string[];
  fetchSuggestions: (
    keyword: string,
    data: string[]
  ) => string[] | Promise<string[]>;
  onSelect: (item: string) => void;
}

const handleSelect = (item: string) => {
  console.log(item);
};

const handleChange = (keyword: string, data: string[]) => {
  return data.filter(item => item.includes(keyword));
  return fetch(`url?keyword=${keyword}`);
}; */
