'use server';

export async function reportIssue(data: { type: string; description: string; userEmail: string | null }) {
  // Mock email dispatcher using console log
  // In a real application, you would use Resend, SendGrid, Nodemailer, etc. here.
  
  console.log('====================================');
  console.log('📧 DISPATCHING NOTIFICATION EMAIL');
  console.log('====================================');
  console.log(`To: team@abtalks.in`);
  console.log(`From: ${data.userEmail || 'Unknown User'}`);
  console.log(`Subject: Issue Report: ${data.type}`);
  console.log(`\nDescription:\n${data.description}`);
  console.log('====================================');
  
  // Simulate network delay for realistic UX
  await new Promise(resolve => setTimeout(resolve, 800));

  return { success: true };
}
