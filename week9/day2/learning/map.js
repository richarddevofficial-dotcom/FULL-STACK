const names = ["Alice", "Bob", "Charlie"];

function NameList() {
  return (
    <ul>
      {names.map((name) => (
        <li>{name}</li>
      ))}
    </ul>
  );
}
