import Content from './fragments/content';
import './styles.css';

function Login() {
  let data = "Login";

  return (
    <div>
      <section className='login-container'>
        <Content data={data} />
      </section>
    </div>
  );
}

export default Login;
