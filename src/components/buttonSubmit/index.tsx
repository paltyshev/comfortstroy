import { tw } from 'twind';

interface IButton {
  primary?: boolean;
  children: React.ReactNode;
  modifier?: string;
}

const ButtonSubmit = ({ primary, modifier, children, ...rest }: IButton) => {
  const baseStyle = `font-sans font-medium py-2 px-4 border rounded`;
  const styles = primary ? `bg-yellow-600 text-white border-yellow-500 hover:bg-yellow-700` : `bg-white text-gray-600 border-gray-300 hover:bg-gray-100`;

  return (
    <button type="submit" className={tw(`${baseStyle} ${styles} ${modifier ?? ``}`)} {...rest}>
      {children}
    </button>
  );
};

export default ButtonSubmit;
