/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Client, ClientDocument } from './client.schema';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class ClientService {

  constructor(
    @InjectModel(Client.name) private readonly clientModel: Model<ClientDocument>
  ) { }



  async create(createClientDto: CreateClientDto,): Promise<Client> {
    const client: ClientDocument = await new this.clientModel(createClientDto).save();

    console.log(client);
    return client;
  }

  findAll() {
    return this.clientModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} client`;
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }
}
