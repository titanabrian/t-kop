import { Pane, SegmentedControl, Table } from 'evergreen-ui';
import * as React from 'react';
import { useState } from 'react';

export default function Content(props: any) {
  const [options] = useState([
    { label: 'Hourly', value: 'hourly' },
    { label: 'Daily', value: 'daily' },
    { label: 'Monthly', value: 'monthly' },
  ]);

  const [value, setValue] = useState('daily');

  return (
    <>
      <Pane margin="30px" width="calc( 100vw - 290px )" padding={20}>
        <SegmentedControl width={240} options={options} value={value} onChange={(value: string) => setValue(value)} />
        <Pane elevation={2} flex={10} marginTop="30px">
          <Table height="400px">
            <Table.Head>
              <Table.SearchHeaderCell />
              <Table.TextHeaderCell>Last Activity</Table.TextHeaderCell>
              <Table.TextHeaderCell>ltv</Table.TextHeaderCell>
            </Table.Head>
            <Table.Body>
              <Table.Row>
                <Table.TextCell>Titan</Table.TextCell>
                <Table.TextCell>Mengarit</Table.TextCell>
                <Table.TextCell isNumber>10</Table.TextCell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Pane>

      </Pane>
    </>
  );
}
