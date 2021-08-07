import React from 'react';
import Button, { ButtonSize } from "../components/Button/button";

function ButtonTest() {

  return (
    <div>
      <Button btnType="primary" size={ButtonSize.Small}>
        小
      </Button>
      <Button btnType="primary">默认</Button>
      <Button btnType="primary" size={ButtonSize.Large}>
        大
      </Button>
      <br />
      <Button>默认</Button>
      <Button btnType="primary">Primary</Button>
      <Button btnType="danger">Danger</Button>
      <Button btnType="link" href="http://www.rscl.cc">
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