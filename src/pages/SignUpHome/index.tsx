import { FacebookIcon } from '../../assets/SocialMediaIcons/FacebookIcon'
import { GoogleIcon } from '../../assets/SocialMediaIcons/GoogleIcon'
import { MailIcon } from '../../assets/SocialMediaIcons/MailIcon'
import { VKIcon } from '../../assets/SocialMediaIcons/VKIcon'
import Button, { ButtonTypes } from '../../components/Button'
import FormContainer from '../../layout/FormContainer'
import styles from './SignUpHome.module.scss'

const regUser = [
  { title: 'Зарегистрироваться через Google', icon: <GoogleIcon /> },
  { title: 'Зарегистрироваться через Facebook', icon: <FacebookIcon /> },
  { title: 'Зарегистрироваться через Вконтакте', icon: <VKIcon /> },
  {
    title: 'Зарегистрироваться через почту',
    icon: <MailIcon />,
  },
]

const SignUpHome = () => {
  return (
    <FormContainer
      logo={'Logo'}
      title={'Создать аккаунт'}
      link={'/signin'}
      textLink={'Войти'}
      text={'Уже есть аккаунт?'}
    >
      <div className={styles.inner}>
        {regUser.map((value, index) => (
          <Button
            key={index + 1}
            title={value.title}
            type={ButtonTypes.Primary}
            icon={value.icon}
            onClick={() => {}}
          />
        ))}
      </div>
    </FormContainer>
  )
}

export default SignUpHome
