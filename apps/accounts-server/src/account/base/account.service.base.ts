/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Account as PrismaAccount } from "@prisma/client";
import { AccountWhereUniqueInput } from "./AccountWhereUniqueInput";
import { ProfileDto } from "../ProfileDto";

export class AccountServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.AccountCountArgs, "select">): Promise<number> {
    return this.prisma.account.count(args);
  }

  async accounts<T extends Prisma.AccountFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountFindManyArgs>
  ): Promise<PrismaAccount[]> {
    return this.prisma.account.findMany<Prisma.AccountFindManyArgs>(args);
  }
  async account<T extends Prisma.AccountFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountFindUniqueArgs>
  ): Promise<PrismaAccount | null> {
    return this.prisma.account.findUnique(args);
  }
  async createAccount<T extends Prisma.AccountCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountCreateArgs>
  ): Promise<PrismaAccount> {
    return this.prisma.account.create<T>(args);
  }
  async updateAccount<T extends Prisma.AccountUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountUpdateArgs>
  ): Promise<PrismaAccount> {
    return this.prisma.account.update<T>(args);
  }
  async deleteAccount<T extends Prisma.AccountDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountDeleteArgs>
  ): Promise<PrismaAccount> {
    return this.prisma.account.delete(args);
  }
  async CreateAccount(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async DeleteAccount(args: AccountWhereUniqueInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async GetAccountById(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async GetAccounts(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async GetProfile(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async Login(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async RefreshToken(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async Register(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async RegisterUser(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async UpdateAccount(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async UpdateProfile(args: ProfileDto): Promise<ProfileDto> {
    throw new Error("Not implemented");
  }
}
