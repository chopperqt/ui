import React from 'react';
import Button from 'components/button/Button'
import Spin from 'components/spin/Spin'

function App() {
  return (
    <div >
      <div>
        <div >
          <Button sizing="small">Small button</Button>
          <Button>Default button</Button>
          <Button sizing="large">Large button</Button>
        </div>
        <div>
          <Button
            isLoading={true}
            fullWidth={true}
            disabled={true}
            isCircle={true}
          >
            Full width button
          </Button>
        </div>
        <div>
          Spin component
          <Spin isLoading={true}>
            <div style={{ width: '200px', height: '200px' }}>
              Какие то надписи и прочее прочее прочее
            </div>
          </Spin>
        </div>
      </div>
    </div >
  );
}

export default App;
