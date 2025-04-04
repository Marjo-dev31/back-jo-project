import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<UserEntity>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);
    return await this.userRepository.save(newUser);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: string) {
    return await this.userRepository.findOne({ where: { id } });
  }

  async findOneByEmail(email: string) {
    return this.userRepository.findOneBy({ email: email });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const hashPassword = await bcrypt.hash(updateUserDto.password, 10);
    await this.userRepository.update(
      { id },
      {
        firstname: updateUserDto.firstname,
        lastname: updateUserDto.lastname,
        email: updateUserDto.email,
        username: updateUserDto.username,
        password: hashPassword,
      },
    );
    return await this.userRepository.findOne({
      where: { id: id },
    });
  }

  async remove(id: string) {
    return await this.userRepository.delete({ id });
  }
}
