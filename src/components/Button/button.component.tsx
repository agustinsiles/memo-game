export interface IProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {}

export default function Button(props: IProps) {
  const { children } = props;
  return <button {...props}>{children}</button>;
}
