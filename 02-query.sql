select b.id, b.name, a.name as parent_name 
from person a 
right join person b on a.id = b.parent_id 