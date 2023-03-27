import React from 'react';
import {
  Button,
  NativeSelect,
  Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography,
} from '@mui/material';
import {
  BsPenFill, BsTrashFill,
} from 'react-icons/bs';
import Sidebar from '../../../components/Sidebar';
import { ActionButton, EnrollContainer } from './style';

const data = [
  {
    name: 'João da Silva',
    cpf: '123.456.789-10',
    phone: '(11) 99999-9999',
    address: 'Rua das Flores, 123',
    cep: '12345-678',
    plan: 'Plano 1',
  },
  {
    name: 'João da Silva',
    cpf: '123.456.789-10',
    phone: '(11) 99999-9999',
    address: 'Rua das Flores, 123',
    cep: '12345-678',
    plan: 'Plano 1',
  },
  {
    name: 'João da Silva',
    cpf: '123.456.789-10',
    phone: '(11) 99999-9999',
    address: 'Rua das Flores, 123',
    cep: '12345-678',
    plan: 'Plano 1',
  },
  {
    name: 'João da Silva',
    cpf: '123.456.789-10',
    phone: '(11) 99999-9999',
    address: 'Rua das Flores, 123',
    cep: '12345-678',
    plan: 'Plano 1',
  },
  {
    name: 'João da Silva',
    cpf: '123.456.789-10',
    phone: '(11) 99999-9999',
    address: 'Rua das Flores, 123',
    cep: '12345-678',
    plan: 'Plano 1',
  },
  {
    name: 'Carlos da Silva',
    cpf: '123.456.789-10',
    phone: '(11) 99999-9999',
    address: 'Rua das Flores, 123',
    cep: '12345-678',
    plan: 'Plano 1',
  },
  {
    name: 'João da Silva',
    cpf: '123.456.789-10',
    phone: '(11) 99999-9999',
    address: 'Rua das Flores, 123',
    cep: '12345-678',
    plan: 'Plano 1',
  },
];

function Enroll() {
  const [filteredData, setFilteredData] = React.useState(data);
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const filtered = data.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));
    setFilteredData(filtered);
  };
  return (
    <div>
      <Sidebar />
      <EnrollContainer>
        <Typography variant="h4" component="h2" gutterBottom>
          Matrículas
        </Typography>
        <div>
          <Button variant="contained" color="primary">
            Nova Matrícula
          </Button>
          <TextField
            id="search"
            label="Buscar"
            onChange={handleSearch}
            variant="outlined"
          />
          <NativeSelect variant="standard">
            <option value="1">Plano 1</option>
            <option value="2">Plano 2</option>
            <option value="3">Plano 3</option>
          </NativeSelect>
        </div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>CPF</TableCell>
              <TableCell>Telefone</TableCell>
              <TableCell>Endereço</TableCell>
              <TableCell>CEP</TableCell>
              <TableCell>Plano</TableCell>
              <TableCell>Editar</TableCell>
              <TableCell>Excluir</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((item) => (
              <TableRow key={item.cpf}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.cpf}</TableCell>
                <TableCell>{item.phone}</TableCell>
                <TableCell>{item.address}</TableCell>
                <TableCell>{item.cep}</TableCell>
                <TableCell>{item.plan}</TableCell>
                <TableCell>
                  <ActionButton color="#7358ec">
                    <BsPenFill />
                  </ActionButton>
                </TableCell>
                <TableCell>
                  <ActionButton color="#ec5858">
                    <BsTrashFill />
                  </ActionButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </EnrollContainer>
    </div>
  );
}

export default Enroll;
