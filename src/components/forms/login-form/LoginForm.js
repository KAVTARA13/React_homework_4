import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { setAuthUserAction } from '../../../redux/actions';
import { login } from '../../../services';
import { AUTH_TOKEN } from '../../../utils/constants';
import { REGISTER_PATH } from '../../../utils/routePaths';

function SignInForm() {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const history = useHistory();

    const onSubmit = async (data) => {
        const loggedIn = await login(data);
        localStorage.setItem(AUTH_TOKEN, JSON.stringify(loggedIn.token));
        dispatch(setAuthUserAction(loggedIn.token));
        history.replace('/');
    };

    return (
        <div className="col-6">
            <h4 className="text-muted">Sign In From</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" defaultValue="eve.holt@reqres.in"
                        {...register('email', {
                            required: true,
                            email: true,
                        })}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        defaultValue="cityslicka"
                        {...register('password', {
                            required: true,
                        })}
                    />
                </div>
                <div className="mb-3 form-check">
                    <Link
                        className="form-check-label"
                        to={REGISTER_PATH}>
                        Sign Up
                    </Link>

                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>

    );
}

export default SignInForm;
