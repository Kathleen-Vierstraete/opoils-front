import '../styles.scss';

const InfosField = ({
  size,
  personality,
  age,
  race,
  name,
  placeholder,
  setName,
  setSize,
  setAge,
  setRace,
  setPersonality,
}) => {
  return (

    <ul>
      <li>
        <label>Nom</label>
        <input
          type="text"
          placeholder="Nom"
          name="nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </li>
      <li>
        <label>Taille</label>
        <select name="Taille" type="select" value={size} onChange={(e) => setSize(e.target.value)}>
          <option value="">Choisir un gabarit</option>
          <option value="Petit">Petit</option>
          <option value="Moyen">Moyen</option>
          <option value="Grand">Grand</option>
        </select>
      </li>
      <li>
        <label>Tempérament</label>
        <select name="Caractère" type="select" value={personality} onChange={(e) => setPersonality(e.target.value)}>
          <option value="">Choisir un caractère</option>
          <option value="Calme">Calme</option>
          <option value="Adaptable">Adaptable</option>
          <option value="Energique">Energique</option>
        </select>
      </li>
      <li>
        <label>Age</label>
        <input
          type="number"
          placeholder="age"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
      </li>
      <li>
        <label>Race</label>
        <input
          type="text"
          placeholder="race"
          name="race"
          value={race}
          onChange={(e) => setRace(e.target.value)}
          required
        />
      </li>
    </ul>
  );
};

export default InfosField;
