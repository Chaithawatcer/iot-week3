import { relations } from "drizzle-orm";
import * as t from "drizzle-orm/pg-core";

/*export const genres = t.pgTable("genres", {
  id: t.bigserial({ mode: "number" }).primaryKey(),
  title: t
    .varchar({
      length: 255,
    })
    .notNull(),
});*/

export const student = t.pgTable("student", {
  id: t.bigserial({ mode: "number" }).primaryKey(),
  fname: t
    .varchar({
      length: 255,
    })
    .notNull(),
  lname: t
    .varchar({
      length: 255,
    })
    .notNull(),
  sid: t
    .varchar({
      length: 255,
    })
    .notNull(),
  bd: t
    .varchar({
      length: 255,
    })
    .notNull(),
  gender: t
    .varchar({
      length: 255,
    })
    .notNull(),
});

/*export const bookRelations = relations(books, ({ one }) => ({
  genre: one(genres, {
    fields: [books.genreId],
    references: [genres.id],
  }),
}));*/
