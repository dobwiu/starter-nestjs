import { Controller, Get, Param } from '@nestjs/common';
import { AccountsService } from './accounts.service';
//import { CreateAccountDto } from './dto/create-account.dto';
//import { UpdateAccountDto } from './dto/update-account.dto';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  // @Post()
  // create(@Body() createAccountDto: CreateAccountDto) {
  //   return this.accountsService.create(createAccountDto);
  // }

  @Get()
  findAll() {
    return this.accountsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.accountsService.findOne(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAccountDto: UpdateAccountDto) {
  //   return this.accountsService.update(+id, updateAccountDto);
  // }
}
