import ButtonPage from "pages/button"
import InputPage from "pages/input"

export const Path = {
  default: '/',
  button: '/button',
  checkBox: '/checkBox',
  input: '/input',
}

export const Status = {
  develop: '🚧',
  complete: '✅',
}

export const Menu = [
  {
    title: 'Button',
    status: Status.complete,
    path: Path.button,
  },
  {
    title: 'Checkbox',
    status: Status.develop,
    path: Path.checkBox,
  },
  {
    title: 'Input',
    status: Status.develop,
    path: Path.input,
  }
]

export const Pages = [
  {
    path: Path.button,
    page: <ButtonPage />,
  },
  {
    path: Path.input,
    page: <InputPage />,
  }
]