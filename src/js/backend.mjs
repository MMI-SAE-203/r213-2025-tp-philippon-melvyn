//melvyn philippon

import PocketBase from 'pocketbase';

const db = new PocketBase('http://127.0.0.1:8090/');

export async function getOffres() {
    // try {
    //     const records = await pb.collection('maison').getFullist();
    //     console.table(records);
    // } catch (e) {
    //     console.error(e);
    // }

    // try {
    //     const Onerecord = await pb.collection('maison').getOne('xx0i51sw35y1t8v');
    //     console.table(Onerecord);
    // } catch (e) {
    //     console.error(e);
    // }

    // try {
    //     const Onerecord = await pb.collection('maison').getOne('50r5u8ekn5umvj8');
    //     console.table(Onerecord);
    // } catch (e) {
    //     console.error(e);
    // }

    // try {
    //     const Onerecord = await pb.collection('maison').getOne('7c5tca183iyf933');
    //     console.table(Onerecord);
    // } catch (e) {
    //     console.error(e);
    // }

    // try {
    //     const Onerecord = await pb.collection('maison').getOne('j434m50j7n3rgy9');
    //     console.table(Onerecord);
    // } catch (e) {
    //     console.error(e);
    // }

    // try {
    //     const Onerecord = await pb.collection('maison').getOne('98262u53x568je0');
    //     console.table(Onerecord);
    // } catch (e) {
    //     console.error(e);
    // }

    // try {
    //     const Onerecord = await pb.collection('maison').getOne('2s6lp558tzl1a89');
    //     console.table(Onerecord);
    // } catch (e) {
    //     console.error(e);
    // }


    // try {
    //     const records = await pb.collection('maison').getFullList({ sort: 'nomMaison' });
    //     console.table(records);
    // } catch (e) {
    //     console.error(e);
    // }



    try {
        let data = await db.collection("maison").getFullList({
            sort: "-created",
        });

        data = data.map((maison) => {
            maison.img = db.files.getURL(maison, maison.images);
            return maison;
        });

        return data;
    } catch (error) {
        console.error("Une erreur est survenue en lisant la liste des maisons :", error);
        return [];
    }
}

export async function getOffre(id) {
    try {
        let data = await pb.collection('maison').getOne(id);
        data.imageUrl = pb.files.getURL(data, data.image);
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la maison', error);
        return null;
    }
}

export async function getAgents() {
    try {
        return await db.collection('agents').getFullList();
    } catch (error) {
        console.error("Erreur lors de la récupération des agents :", error);
        return [];
    }
}

export async function getOffresParAgent(agentId) {
    try {
        return await db.collection('maison').getFullList({
            filter: `agent = '${agentId}'`
        });
    } catch (error) {
        console.error("Erreur lors de la récupération des offres :", error);
        return [];
    }
}

export async function setFavori(house) {
    await pb.collection('maison').update(house.id, { favori: !house.favori });
}