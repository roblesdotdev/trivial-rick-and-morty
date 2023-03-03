import { useParams } from "react-router-dom";

export default function CharacterDetailPage() {
  const { id } = useParams();

  return (
    <div>
      <h1>Character Detail Page for {id}</h1>
    </div>
  );
}
