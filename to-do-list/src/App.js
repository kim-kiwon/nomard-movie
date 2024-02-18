import {useState} from "react";

function App() {
  const [toDo, setToDo] = useState("") // 초깃값 "" 로 toDo 변수 설정
  const [toDos, setToDos] = useState([])
  const onChange = (event) => setToDo(event.target.value) // onChange 훅. 해당 태그에 수정이 발생하면 호출됨
  const onSubmit = (event) => { // onSubmit 훅. 해당 form 태그의 submit 시 호출됨
    event.preventDefault() // 기본 동작을 막는다.
    if (toDo === "") {
      return
    }
    setToDo("")
    setToDos(currentArray => [toDo, ...currentArray]) // state 수정 시 set 함수나 별도 함수를 쓸 수 있다
  }
  console.log(toDos)
  return (
    <div>
      {/*JSX 내에서 JS 를 쓰고 싶다면 {} 를 사용한다 */}
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your todo"
        />
        <button>Add To Do</button>
      </form>
      <hr />
      {
        toDos.map((item, index) =>
        <li key={index}>{item}</li>)
      }
    </div>
  );
}

/*
- useState
  - useState 로 선언한 변수가 변경되면 리렌더링을 수행한다.
  - useState 의 setter 는 직접 사용하거나. 이전 값을 사용하는 함수를 선언해줄 수 있다.
- onChange
  - onChange는 해당 태그 값이 변경될 경우 호출되는 훅이다
- onSubmit
  - onSubmit은 해당 태그가 제출될 경우 호출되는 훅이다
- JSX
  - ReactDOM 이 렌더링해준다.
  - JS 코드를 사용하려면 {} 를 사용한다
 */

export default App;
