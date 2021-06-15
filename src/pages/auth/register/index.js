import { withNoAuth } from '../../../hoc';
import RegisterForm from '../../../components/forms/register-form';

function SignUpPage() {
    return (
        <div className="row mt-4">
            <div className="d-flex justify-content-center">
                <RegisterForm />
            </div>
        </div>
    );
}

export default SignUpPage;