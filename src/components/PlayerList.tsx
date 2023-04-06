import { useState, useCallback } from 'react';
import Button from './Button';
import Input from './Input';

type Props = {
  players: string[];
  handleRemovePlayer: (player: string) => void;
};

const Players = ({ players, handleRemovePlayer }: Props) => {
  return (
    <ul>
      {players.map((player) => (
        <li key={player} onClick={() => handleRemovePlayer(player)}>
          {player}
        </li>
      ))}
    </ul>
  );
};

const PlayerList = () => {
  const [player, setPlayer] = useState<string>('');
  const [players, setPlayers] = useState<string[]>([
    'Messi',
    'Ronaldo',
    'Laspada',
  ]);

  function handleChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    setPlayer(event.target.value);
  }

  function handleAddPlayer() {
    setPlayers((prevPlayers) => [...prevPlayers, player]);
  }

  const handleRemovePlayer = useCallback((player: string) => {
    setPlayers((prevPlayers) => prevPlayers.filter((p) => p !== player));
  }, []);

  return (
    <>
      <Input
        id="playername"
        placeholder="Player Name"
        onChange={handleChangeInput}
      />
      <Button onClick={handleAddPlayer}>Add Player</Button>
      <Players players={players} handleRemovePlayer={handleRemovePlayer} />
    </>
  );
};

export default PlayerList;
