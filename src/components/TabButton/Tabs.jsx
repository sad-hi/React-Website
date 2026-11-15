// buttonsContainer lets the parent choose the wrapper element ('menu', 'div', 'ul', or a component).
// It's copied into a capitalized variable so React treats it as an element type.
export default function Tabs({ children, buttons, buttonsContainer = 'menu' }) {
  const ButtonsContainer = buttonsContainer;

  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
