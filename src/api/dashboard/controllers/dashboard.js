'use strict';

// /**
//  * A set of functions called "actions" for `dashboard`
//  */
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::lesson.lesson", ({ strapi }) => ({
  async find(ctx) {
    const {data, meta} = await super.find(ctx);

    // const xxx = await strapi.db.entityManager.count({})
    for (const lesson of data) {
      const topicCount = await strapi.db.query("api::topic.topic").count({
        where: {
          lesson: {
            id: lesson.id,
          },
        },
      });
      lesson['topic'] = topicCount;
    }
    try {
      return {data, meta};
    } catch (err) {
      ctx.body = err;
    }
  }

}));

// module.exports = {
//   async find(ctx) {
//     console.log(ctx.req)
//     const knex = strapi.db.connection;
//     const result = await knex.raw(`
//       select t.id, t.title, t.periode, count(l.id) as countOfLesson
//       from topics t 
//       inner join topics_lesson_links tll on tll.topic_id = t.id 
//       left join lessons l on l.id = tll.lesson_id
//       group by l.id
//     `);
//     try {
//       return {result};
//     } catch (err) {
//       ctx.body = err;
//     }
//   }
// };