import PropTypes from "prop-types";
import styles from "./Button.module.css"; // create-react-app은 css를 js코드로 변경해줌

/*
- 기존 css: 전역적으로 적용됨
- react 컴포넌트 속성에 css: 속성에 css 추가가 가능하지만 컴포넌트마다 일일이 적용해줘야함.
- create-react-app의 css 모듈: 컴포넌트 속성의 css를 객체로 만들어 사용해, 재사용 가능하도록 해줌.
  - css 생성 -> css를 import -> className을 {import명.클래스명} 으로 설정하면 됨. 가상 클래스명을 부여해 css를 적용해준다.
 */
function Button({ text }){
  return <button className={styles.btn}>
    {text}
  </button>
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Button;