import { Divider } from '@mui/material'
import { Link } from 'react-router-dom'

import { loginInitialValues, loginInputs } from './loginInputsData'
import { loginValidationSchema } from './loginValidationSchema'
import classes from './Login.module.css'
import { LoginWithSocial } from '../../../components/loginWithSocial'

import
{
    Paragraph,
    HeaderText,
    Logo,
    FormCard,
    IllustrationSection
} from '../../../components/ui';
import
{
    Btn,
    LoopOnInputs,
    FormikContainer,
} from '../../../components/inputs';
import { TextAndLink } from '../../../components/common'

const LoginUi = (props) =>
{
    const {
        handleLogin,
        isLoadingLogin,
    } = props;
    return (
        <div
            className='height-100vh  center-y center-x'
        >
            <FormCard
                size="small"
            >
                <Logo />
                <HeaderText>
                    Login
                </HeaderText>
                <Paragraph>
                    Please, Enter your details
                </Paragraph>
                <FormikContainer
                    initialValues={loginInitialValues}
                    validationSchema={loginValidationSchema}
                    onSubmit={handleLogin}
                >
                    <LoopOnInputs
                        inputs={loginInputs}
                        disabled={isLoadingLogin}
                    />
                    <div
                        className={classes.forgetPasswordContainer}
                    >
                        <Link
                            to="/forgot-password"
                        >
                            Forgot password?
                        </Link>
                    </div>
                    <Btn
                        type="submit"
                        isLoading={isLoadingLogin}
                    >
                        Login
                    </Btn>
                    <Divider className={classes.divider}>Or</Divider>
                    <TextAndLink type="login" />
                    <LoginWithSocial />
                </FormikContainer>
            </FormCard>
            <IllustrationSection
                type="login"
                size="big"
            />
        </div>
    )
}

export default LoginUi