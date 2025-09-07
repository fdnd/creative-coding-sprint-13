export async function load({ url }) {
    const membersResponse = await fetch('https://fdnd.directus.app/items/person?fields=*,squads.squad_id.name,squads.squad_id.cohort,squads.squad_id.tribe.name')
    const membersData = await membersResponse.json();

    const filteredMembers = membersData.data.filter(member => member.mugshot && (member.role.includes('co_teacher') || member.role.includes('squad_leader')));

    return { members: filteredMembers };
}