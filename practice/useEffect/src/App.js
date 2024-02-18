import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, [])
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return <div>
    {showing ? <Hello /> : null}
    <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
  </div>;
}

export default App;

/*
- useEffect
  - 해당 컴포넌트의 수정이 아닌. 최초생성/삭제 될때만 호출될 함수를 정의할 수 있다.
- useEffect의 첫번째 인자
  - 함수 내부
    - 해당 컴포넌트가 생성될 때만 호출된다.
  - 함수 리턴값
    - 해당 컴포넌트가 삭제될 때만 호출된다.
- useEffect의 두번째 인자
  - 해당 state가 변경되어 재렌더링 될경우 수정이어도 호출해라.
*/
