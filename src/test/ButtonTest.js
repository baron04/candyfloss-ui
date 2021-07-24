import React from 'react';
import Button, { ButtonType, ButtonSize } from "../components/Button/button";

function ButtonTest() {

  return (
    <div>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>
        小
      </Button>
      <Button btnType={ButtonType.Primary}>默认</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
        大
      </Button>
      <br />
      <Button>默认</Button>
      <Button btnType={ButtonType.Primary}>Primary</Button>
      <Button btnType={ButtonType.Danger}>Danger</Button>
      <Button btnType={ButtonType.Link} href="http://www.rscl.cc">
        rscl link
      </Button>
      <Button disabled>disabled</Button>
      <br />
      <Button autoFocus>autofocus</Button>
      <Button
        onClick={e => {
          console.log("onClick", e.target);
        }}
      >
        onClick
      </Button>
      <Button className="custom">className test</Button>
    </div>
  )
}

export default ButtonTest;