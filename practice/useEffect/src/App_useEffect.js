import { useState, useEffect } from "react";

function App_useEffect() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("")
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log("I run only once");
  }, []);

  useEffect(() => {
    console.log("I run when counter changes");
  }, [counter]);

  useEffect(() => {
    console.log("I run when keyword changes");
  }, [keyword]);

  useEffect(() => {
    console.log("I run when counter & keyword changes");
  }, [counter, keyword]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App_useEffect;

/*
- 리액트의 철학
  - state가 변경되면, state가 존재하는 App 컴포넌트 함수가 재실행되며 재렌더링된다.
    - state가 변해도 컴포넌트내의 특정 함수가 재실행되지 않도록 할 수 없을까?
      - 예를 들어. 누군가 텍스트를 변경하면 컴포넌트내의 API 재호출 함수가 계속 실행될 수 있다.
- useEffect
  - 첫번째 인자
    - state들이 변경되어 컴포넌트 전체가 재실행되어도, 첫번째 인자로 들어온 함수가 재실행되지 않게 해준다.
  - 두번째 인자
    - 해당 state가 변경될떄는 해당 함수를 재호출한다.
*/
