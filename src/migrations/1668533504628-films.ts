import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class films1668030504628 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('filmes_favoritos');
    await queryRunner.createTable(
      new Table({
        name: 'filmes_favoritos',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'title',
            type: 'varchar(200)',
          },
          {
            name: 'image',
            type: 'varchar(1000)',
          },
          {
            name: 'criado_em',
            type: 'timestamp',
          },
          {
            name: 'atualizado_em',
            type: 'timestamp',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('filmes_favoritos');
  }
}
