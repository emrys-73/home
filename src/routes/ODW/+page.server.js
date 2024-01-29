/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { redirect } from '@sveltejs/kit';
import { landmakerUrl } from '../../stores.js';

export const actions = {

    login: async ({ request, locals }) => {
        const data = Object.fromEntries(await request.formData()); 

        let landMakerURLLocal;

        landmakerUrl.subscribe((value) => {landMakerURLLocal = value});

        const key = data.key;

        // pt2upsl7uct12dz

        let record = undefined;

        try {
            record = await locals.pb.collection('2_lm_prospects').getFirstListItem(`id="${key}"`);

            // console.log(record)

        } catch (error) {

            console.log(error)
            throw redirect(303, '/ODW/join')
        }

        // console.log(landMakerURLLocal)
        // const redirectUrl = `${landMakerURLLocal}/${record.username}`;
        const redirectUrl = `/ODW/${record.id}`;

        redirect(303, redirectUrl)

    }


}