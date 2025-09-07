export async function load({ url, params }) {
    const memberResponse = await fetch('https://fdnd.directus.app/items/person/'+ params.memberid)
    const memberData = await memberResponse.json();
    return { id: params.memberid, memberData };
}