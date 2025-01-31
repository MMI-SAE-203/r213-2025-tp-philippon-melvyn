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