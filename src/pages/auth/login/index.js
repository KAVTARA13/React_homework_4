import { withNoAuth } from '../../../hoc';
import LoginForm from '../../../components/forms/login-form';

function LoginPage() {
    return (
        <div className="row mt-4">
            <div className="d-flex justify-content-center">
                <LoginForm />
            </div>
        </div>
    );
}

export default LoginPage;