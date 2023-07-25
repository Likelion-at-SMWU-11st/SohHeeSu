import './App.css';
import ExternalButton from './ExternalButton';
import InlineButton from './InlineButton';
import Logo from './Logo';
import LikeButton from './LikeButton';
import FunnyButton from './FunnyButton';
import Example  from './Example';

function App() {
  return (
  <>
    <Logo/>
    {/* <h3>🦁다양한 스타일링 방법으로 버튼을 만들어보자🦁</h3>
    <InlineButton/>
    <ExternalButton/> */}
    <h3>오늘 5주차 세미나 내용 ㅈㄱㄴ</h3>
    <p>오늘 프론트는 5주차 styled components 배운대요~~~!ㅎㅎㅎㅎ</p>
    <LikeButton/>
    <FunnyButton/>
    <hr/>
    <h4>댓글</h4>
    <small>익명 1 완전 재밌을 것 같아요</small> <br/><br/>
    <Example/>
  </>
  );
}

export default App;
