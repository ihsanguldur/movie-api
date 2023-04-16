import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1681662321624 implements MigrationInterface {
    name = 'InitialMigration1681662321624'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "lists" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "name" character varying(35) NOT NULL, "information" character varying(250) NOT NULL, "userID" integer NOT NULL, "isPrivate" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_268b525e9a6dd04d0685cb2aaaa" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "lists_comments" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "userID" integer NOT NULL, "listID" integer NOT NULL, "content" character varying(250) NOT NULL, CONSTRAINT "PK_4ce7542e4bd0a97b93d45fd1822" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "lists_comments_likes" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "commentID" integer NOT NULL, "listID" integer NOT NULL, CONSTRAINT "PK_a20f8d2df4fda31de1a3f1fe8b4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "movies" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "name" character varying NOT NULL, "image" character varying NOT NULL, "fragment" character varying NOT NULL, "information" character varying(250) NOT NULL, "rate" integer NOT NULL DEFAULT '0', "IMDBRate" integer NOT NULL DEFAULT '0', "releaseDate" TIMESTAMP NOT NULL, "shortUrl" character varying NOT NULL, "cast" character varying NOT NULL, "director" character varying NOT NULL, CONSTRAINT "PK_c5b2c134e871bfd1c2fe7cc3705" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "movies_comments" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "userID" integer NOT NULL, "movieID" integer NOT NULL, "content" character varying(250) NOT NULL, CONSTRAINT "PK_79a7240fe6e678c21ecdd8f3f01" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "movies_comments_likes" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "commentID" integer NOT NULL, "moviesID" integer NOT NULL, CONSTRAINT "PK_35d73b57b0c009119d5a612dd18" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users_lists" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "userID" integer NOT NULL, "listID" integer NOT NULL, "isLiked" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_4a9b9fffac0634bb73ea65f34f4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users_movies" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "userID" integer NOT NULL, "movieID" integer NOT NULL, "isWatched" boolean NOT NULL DEFAULT false, "review" character varying NOT NULL, "rate" integer NOT NULL, CONSTRAINT "PK_e001e3ebacbe2b16688c26962af" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "where_to_watch" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "movieID" integer NOT NULL, "netflix" character varying NOT NULL, "amazonPrime" character varying NOT NULL, "disneyPlus" character varying NOT NULL, CONSTRAINT "PK_2d9afe3be00e2ccb534cdf22a61" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "where_to_watch"`);
        await queryRunner.query(`DROP TABLE "users_movies"`);
        await queryRunner.query(`DROP TABLE "users_lists"`);
        await queryRunner.query(`DROP TABLE "movies_comments_likes"`);
        await queryRunner.query(`DROP TABLE "movies_comments"`);
        await queryRunner.query(`DROP TABLE "movies"`);
        await queryRunner.query(`DROP TABLE "lists_comments_likes"`);
        await queryRunner.query(`DROP TABLE "lists_comments"`);
        await queryRunner.query(`DROP TABLE "lists"`);
    }

}
