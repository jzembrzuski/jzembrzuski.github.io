import {FC, memo} from 'react';

import {Skills} from '../../../data/dataDef';

const Skills: FC<{item: Skills}> = memo(({item}) => {
  const {languages, frameworks, other} = item;
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
          <span className="flex-1 text-sm font-medium sm:flex-none">Languages:</span>
          <span>•{languages}</span>
          <br></br>
          <span className="flex-1 text-sm font-medium sm:flex-none">Frameworks:</span>
          <span>•{frameworks}</span>
          <br></br>
          <span className="flex-1 text-sm font-medium sm:flex-none">Other:</span>
          <span>•{other}</span>
          <br></br>
      </div>
    </div>
  );
});

Skills.displayName = 'SkillsItem';
export default Skills;
