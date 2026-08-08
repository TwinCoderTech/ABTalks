import 'dotenv/config';
import { PrismaClient } from '../generated/prisma/client';

import Database from 'better-sqlite3';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL as string });
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.user.upsert({
    where: { email: 'aarav.sharma@example.com' },
    update: {},
    create: {
      name: 'Aarav Sharma',
      email: 'aarav.sharma@example.com',
      password: 'password123',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHWKjgaoccvJQ_pTDR6MMTnh_I9ioHwH8605m4DlwJQQPWNDtQtogX1r-rDo1BEG19I3QFjMVeX-2hqMuBGh3rNS3DIbUtOifU-ROhutPffEwfnA_a1YIpLsGGDiNdfaccydLApjjCKhWpcjSabNyc37riqqfjoJDvZ-6JRq6FyJ7IBRT_N0uHnx2cqX_DY_zbAS25H5r8Z7elXTBBnJr5ULSUtWTyY9Z8PLGMQ4EAYwGNv0Yk58Ih',
      streak: 13,
      progressPercent: 65,
    },
  });

  await prisma.program.deleteMany();
  await prisma.program.create({
    data: {
      title: '60-Day Claude AI Mastery',
      currentDay: 12,
      totalDays: 60,
      progressPercent: 20,
      type: 'AI',
    }
  });

  await prisma.hackathon.deleteMany();
  await prisma.hackathon.create({
    data: {
      title: 'ViCODATHON',
      description: 'Join the ultimate vibe-coding experience. Build, break, and innovate over a 48-hour sprint with peers.',
      startsIn: 'Starts in 3 days',
      durationBadge: '48 HOURS',
      typeBadge: 'VIBE-CODING',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiVmexFOqYAN0Hh5QoFz_4q4-bAeRwyMh1QKEELVbdNpBk_zOpXEUl9jxEFH2OaLy8T0VT9wOXG2w4ZJXqEXC_5Gw2P3NutFzjANeXCb2OnfY_HoOuohyY2eVTebHB7FbKkF4sclABkqi7TUq-XQQpYbbEC8bgNAYaE7bf_OfYjlXg1UM5vnCH8qRn8vNNS8bnQpmkHWUPh5E4p6vhQqJseBepdjbSEjvQOsCYZ0_6y4w894vhKd3C',
    }
  });

  await prisma.jobProfile.deleteMany();
  await prisma.jobProfile.createMany({
    data: [
      {
        title: 'Java Developer',
        category: 'Software Engineering',
        tags: 'Spring Boot,Microservices',
        iconType: 'Java',
      },
      {
        title: 'Digital Marketing',
        category: 'Growth & Strategy',
        tags: 'SEO,Analytics',
        iconType: 'Mkt',
      }
    ]
  });

  console.log('Seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
