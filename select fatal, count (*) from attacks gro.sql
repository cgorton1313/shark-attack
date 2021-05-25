select attackCount.common_name, numFatals, numAttacks, (numFatals / numAttacks) as percentFatal
from (
select common_name, count(attack_id) as numAttacks
from attacks, species
where species.species_id = attacks.species_id
group by common_name
) as attackCount
left join
(
select common_name, count(attack_id) as numFatals
from attacks, species
where species.species_id = attacks.species_id
and fatal = 'Y'
group by common_name
) as fatalCount
on attackCount.common_name = fatalCount.common_name
order by percentFatal desc;
