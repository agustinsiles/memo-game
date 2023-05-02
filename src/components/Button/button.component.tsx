export interface IProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {}

export default function Button({ children }: IProps) {
  return <button>{children}</button>;
}
