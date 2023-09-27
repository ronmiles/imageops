import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

type RerunMiniTableProps = {};

function createData(name: string, algoName: string, progress: number) {
  return { name, algoName, progress };
}

const rows = [
  createData("T Reflow", "NAME1", 88),
  createData("Objects 23/3", "NAME2LONG", 72),
  createData("Ron Hagever", "NAME3", 53),
];

export const RerunMiniTable = ({}: RerunMiniTableProps): JSX.Element => {
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">a</TableCell>
            <TableCell align="right">progress</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.algoName}</TableCell>
              <TableCell align="right">{row.progress}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
