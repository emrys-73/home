/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

export const load = async ({ locals, params }) => {
    const getBooks = async () => {
        try {
            const books = await locals.pb.collection('3_portfolio_books').getFullList({
                sort: '-created',
            });

            return books;

        } catch (error) {
            console.log("Error retrieving books")
        }
    }

    return {
        books: await getBooks(),
        link: "https://base.astralta.com/api/files/yccj1abof96p6kx/5s3kz7jliwf7deh/probability_theory_i_zO3ViKiB8c.pdf?token=",
        net: "https://base.astralta.com/api/files/yccj1abof96p6kx/6q1rt4u7atbmrpr/networks_handout_adrian_montoya_jPcBQHfSsq.pdf?token=",
    }
}
