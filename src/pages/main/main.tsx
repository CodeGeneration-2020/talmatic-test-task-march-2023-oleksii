import React from 'react';
import Table from 'src/common/table/table';
import {Spell} from 'src/features/api-types';
import useSpells from 'src/features/useSpells';
import NavigationDrawer from 'src/components/nav-drawer/nav-drawer';
import SEPARATE_SPELL_FORMATTER from 'src/utils/spell-modal-formatter/spell-modal-formatter';
import SpellDescriptionModal from 'src/components/spell-description/spell-description-modal';
import styles from './main.module.scss';

// The Main page where user can access the whole list of the spells
const MainEntry = () => {
  // Local state of the currently selected spell
  const [selectedSpell, setSelectedSpell] = React.useState<Spell | null>(null);

  // The state of the spell description modal for the visibility of the spell description modal
  const [isSpellDescriptionModalOpen, setIsSpellDescriptionModalOpen] = React.useState(false);

  // Function to close the spell description modal
  const handleSpellDescriptionModalClose = () => {
    setIsSpellDescriptionModalOpen(false);
    setSelectedSpell(null);
  };

  // Function to open the spell description modal
  const handleRowClick = (spell: Omit<Spell, 'index'> & {id: string}) => {
    setSelectedSpell({name: spell.name, index: spell.id, url: spell.url});
    setIsSpellDescriptionModalOpen(true);
  };

  // Data which is used to render the data set for the table
  const {data} = useSpells();

  return (
    <div className={styles.wrapper}>
      <NavigationDrawer />
      <Table
        onRowClick={handleRowClick}
        columns={[{field: 'name', headerName: 'Spell Name', width: 200, hideSortIcons: true}]}
        data={data?.results.map(value => ({id: value.index, name: value.name, url: value.url})) || []}
      />
      <SpellDescriptionModal
        formatter={SEPARATE_SPELL_FORMATTER}
        selectedSpell={selectedSpell as Spell}
        isVisible={isSpellDescriptionModalOpen}
        onClose={handleSpellDescriptionModalClose}
      />
    </div>
  );
};
export default MainEntry;
