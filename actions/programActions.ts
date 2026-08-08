'use server';

import { db } from '@/lib/db';
import { getCurrentUser } from './userActions';
import { revalidatePath } from 'next/cache';

export async function getOngoingPrograms() {
  try {
    return await db.program.findMany({
      orderBy: { currentDay: 'desc' }
    });
  } catch (error) {
    console.error("Error in getOngoingPrograms:", error);
    return [];
  }
}

export async function getUpcomingHackathons() {
  try {
    return await db.hackathon.findMany();
  } catch (error) {
    console.error("Error in getUpcomingHackathons:", error);
    return [];
  }
}

export async function getJobProfiles() {
  try {
    return await db.jobProfile.findMany();
  } catch (error) {
    console.error("Error in getJobProfiles:", error);
    return [];
  }
}

export async function submitDailyTask(formData: FormData) {
  try {
    const user = await getCurrentUser();
    if (!user) throw new Error('Not authenticated');

    const githubUrl = formData.get('githubUrl') as string;
    const linkedinUrl = formData.get('linkedinUrl') as string;
    const programId = formData.get('programId') as string || 'default'; // In a real app we'd pass this dynamically

    await db.submission.create({
      data: {
        userId: user.id,
        programId,
        githubUrl,
        linkedinUrl
      }
    });

    // Optionally update user streak
    await db.user.update({
      where: { id: user.id },
      data: { streak: { increment: 1 } }
    });

    revalidatePath('/dashboard');
    revalidatePath('/mastery');
    revalidatePath('/profile');
  } catch (error) {
    console.error("Error in submitDailyTask:", error);
    throw error;
  }
}
