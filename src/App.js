import logo from './logo.svg';
import './App.css';

function App() {
  return (
 
      <div className="App col-lg-12 col-md-12 col-sm-12">
        <div className='first '>
          <Detail
            storage="5GB Storage"
            top="FREE"
            middle="$0"
            right="✔"
            right1="❌"
            right3="❌"
            oppo="0.5"
            oppo1="0.5"
            user="Single User"
          />
   </div>
      <div className='first'>
        <Detail
          right1="❌"
          storage="50GB Storage"
          right="✔"
          right3="✔"
          oppo="1"
          oppo1="0.5"
          user1="5 User"
          top="PLUS"
          middle="$9"
        />
      </div>
      <div className='first'>
        <Detail
          storage="150GB Storage"
          right="✔"
          right1="✔"
          right3="✔"
          user1="Unlimited Users"
          top="PRO"
          oppo="1"
          oppo1="1"
          middle="$49"
          limit="Unlimited"
        />
      </div>

    </div>
  );
}


function Detail(props) {
  return (
    <div className='f'>
      <h6 className='some'>{props.top}</h6>
      <h2>{props.middle}</h2>
      <span>/month</span>
      <hr></hr>
      <p><span>{props.right}</span> {props.user}<b>{props.user1}</b></p>
      <p><span>{props.right}</span> {props.storage}</p>
      <p><span>{props.right}</span> Unlimited Public Project</p>
      <p><span>{props.right}</span> Community Access</p>
      <p style={{opacity:props.oppo}}><span>{props.right3}</span> Unlimited Private Project</p>
      <p style={{opacity:props.oppo}}><span className='x '>{props.right3}</span> Dedicated Phone Support</p>
      <p style={{opacity:props.oppo}}><span className='x '>{props.right3}</span> <b>{props.limit}</b> Free Subdomains</p>
      <p  style={{opacity:props.oppo1}}><span className='x'>{props.right1}</span> Monthly Status Reports</p>
      <button>Submit</button>
    </div>
  );
}

function  apps() {
  return(
    <div className="apps col-lg-15 col-md-15 col-sm-15">
      <div className='first'>
        <Detail
        storage="105gb store"
        top="free"
        middle="#9"
        right1="😜"
        right="😎"
        right2="_😎"
        oppo1="0.5"
        oppo="0.5"
        user="single User"
        />
      </div>
    </div>
  );
}
export default apps;
function Detail(props){
  return (
    <div className='f'>
    <h6 className='some'>{props.top}</h6>
    <h2>{props.middle}</h2>
    <hr></hr>
    <hr></hr>
    <p><span>{props.right}</span> {props.user}<b>{props.user1}</b></p>
      <p><span>{props.right}</span> {props.storage}</p>
      <p><span>{props.right}</span> Unlimited Public Project</p>
      <p><span>{props.right}</span> Community Access</p>
      <p style={{opacity:props.oppo}}><span>{props.right3}</span> Unlimited Private Project</p>
      <p style={{opacity:props.oppo}}><span className='x '>{props.right3}</span> Dedicated Phone Support</p>
      <p style={{opacity:props.oppo}}><span className='x '>{props.right3}</span> <b>{props.limit}</b> Free Subdomains</p>
      <p  style={{opacity:props.oppo1}}><span className='x'>{props.right1}</span> Monthly Status Reports</p>
      <button>Submit</button>

    </div>
  );
}