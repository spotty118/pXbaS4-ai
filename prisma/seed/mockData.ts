import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('323a16f9-f160-44e0-96c3-2cb2e263f39b', '1Otto61@yahoo.com', 'Emily Jones', 'https://i.imgur.com/YfJQV5z.png?id=3', 'inv345mno', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('8a923a78-31b3-4c03-9f07-852d1018e2f6', '9Emmett_Simonis@hotmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=11', 'inv123abc', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('07fcd2e0-7233-42d8-ac74-0887121c1028', '17Sandy86@yahoo.com', 'Michael Brown', 'https://i.imgur.com/YfJQV5z.png?id=19', 'inv456def', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('4f417059-d4d1-4540-a460-498c0bc1bab7', '25Elsie1@gmail.com', 'Emily Jones', 'https://i.imgur.com/YfJQV5z.png?id=27', 'inv789ghi', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('b5a689ce-a1ef-475c-ae65-9e691bfa788e', '41Edgardo46@gmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=43', 'inv345mno', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('6909b2fb-d494-42ba-b3e9-a4b15efba3be', '49Bella_Lubowitz44@yahoo.com', 'Michael Brown', 'https://i.imgur.com/YfJQV5z.png?id=51', 'inv012jkl', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('b85de096-cc45-4e9e-964d-a1b3227a580e', '57Adriel_Greenfelder@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=59', 'inv789ghi', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('f5ef19c1-782c-49cc-85d4-4e0291fa0bf8', '65Chesley_Wolff82@gmail.com', 'Chris Wilson', 'https://i.imgur.com/YfJQV5z.png?id=67', 'inv789ghi', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('6de21f07-aabe-4aa9-95f8-265ddaa2eab5', '73Grace.Collier56@yahoo.com', 'Emily Jones', 'https://i.imgur.com/YfJQV5z.png?id=75', 'inv789ghi', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "Plan" ("id", "name", "benefits", "price") VALUES ('04a748d0-8e7b-4b69-8703-a787f4499a4f', 'Starter', 'Priority support and advanced features', 221);
INSERT INTO "Plan" ("id", "name", "benefits", "price") VALUES ('1f05c5e7-90de-4e40-8155-8710943533bb', 'Basic', 'Priority support and advanced features', 942);
INSERT INTO "Plan" ("id", "name", "benefits", "price") VALUES ('26ee1628-9f8d-42c5-bc2d-9c9cec4995da', 'Enterprise', 'Custom solutions and dedicated account manager', 95);
INSERT INTO "Plan" ("id", "name", "benefits", "price") VALUES ('b795b19b-7293-4814-827e-222e9ab5c5f9', 'Premium', 'Limited access to core features', 970);
INSERT INTO "Plan" ("id", "name", "benefits", "price") VALUES ('744ebb92-b5b0-4ea2-8d03-4e1cf23d8375', 'Starter', 'Access to basic features', 374);
INSERT INTO "Plan" ("id", "name", "benefits", "price") VALUES ('393578b9-4e93-4b81-bb32-41fbc3e6465f', 'Starter', 'Unlimited access and premium support', 784);
INSERT INTO "Plan" ("id", "name", "benefits", "price") VALUES ('45fffef9-4dbf-48e4-b5ac-a2de561fdf9b', 'Starter', 'Access to basic features', 919);
INSERT INTO "Plan" ("id", "name", "benefits", "price") VALUES ('d14ededf-7547-4fb9-90ee-0b81ae9d9ce7', 'Basic', 'Unlimited access and premium support', 340);
INSERT INTO "Plan" ("id", "name", "benefits", "price") VALUES ('1330fd28-590a-4163-91c2-745e6286df41', 'Pro', 'Priority support and advanced features', 48);
INSERT INTO "Plan" ("id", "name", "benefits", "price") VALUES ('e7c3f7a1-5e26-4f49-95d2-d74ed5b37033', 'Enterprise', 'Priority support and advanced features', 631);

INSERT INTO "Application" ("id", "description", "status", "dockerContainerId", "codeUrl", "userId") VALUES ('f9772ae1-d111-4611-a79d-d0147bc6170a', 'Ecommerce site for handmade crafts', 'pending', 'ghi789jkl012', 'https://i.imgur.com/YfJQV5z.png?id=124', 'f5ef19c1-782c-49cc-85d4-4e0291fa0bf8');
INSERT INTO "Application" ("id", "description", "status", "dockerContainerId", "codeUrl", "userId") VALUES ('3ae0898b-c9dd-4440-9bce-baf9f28a993a', 'Ecommerce site for handmade crafts', 'pending', 'ghi789jkl012', 'https://i.imgur.com/YfJQV5z.png?id=129', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Application" ("id", "description", "status", "dockerContainerId", "codeUrl", "userId") VALUES ('a21bb2bb-ed56-4878-af03-f02c2bcc1526', 'Ecommerce site for handmade crafts', 'failed', 'mno345pqr678', 'https://i.imgur.com/YfJQV5z.png?id=134', 'b85de096-cc45-4e9e-964d-a1b3227a580e');
INSERT INTO "Application" ("id", "description", "status", "dockerContainerId", "codeUrl", "userId") VALUES ('eb4f514b-3b91-4fb2-b7f6-b2aa6d32331c', 'Social media platform for pet owners', 'queued', 'yz567abc890', 'https://i.imgur.com/YfJQV5z.png?id=139', 'f5ef19c1-782c-49cc-85d4-4e0291fa0bf8');
INSERT INTO "Application" ("id", "description", "status", "dockerContainerId", "codeUrl", "userId") VALUES ('848ec286-3174-4bb1-8e0e-fe0c42010a6f', 'Social media platform for pet owners', 'failed', 'ghi789jkl012', 'https://i.imgur.com/YfJQV5z.png?id=144', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Application" ("id", "description", "status", "dockerContainerId", "codeUrl", "userId") VALUES ('3a6b6cbd-d67b-41aa-8907-1141dc241581', 'A task management app with calendar integration', 'queued', 'yz567abc890', 'https://i.imgur.com/YfJQV5z.png?id=149', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Application" ("id", "description", "status", "dockerContainerId", "codeUrl", "userId") VALUES ('2ebabc21-acd4-4a32-90a8-c4d6bf4d37dc', 'Social media platform for pet owners', 'in_progress', 'stu901vwx234', 'https://i.imgur.com/YfJQV5z.png?id=154', 'b5a689ce-a1ef-475c-ae65-9e691bfa788e');
INSERT INTO "Application" ("id", "description", "status", "dockerContainerId", "codeUrl", "userId") VALUES ('713cf013-b700-4ff1-bcfc-003ba5b4dc7f', 'Realtime chat application for remote teams', 'in_progress', 'stu901vwx234', 'https://i.imgur.com/YfJQV5z.png?id=159', 'b5a689ce-a1ef-475c-ae65-9e691bfa788e');
INSERT INTO "Application" ("id", "description", "status", "dockerContainerId", "codeUrl", "userId") VALUES ('3436f3f8-2ddb-4df0-9479-394f571e26ab', 'A task management app with calendar integration', 'completed', 'ghi789jkl012', 'https://i.imgur.com/YfJQV5z.png?id=164', '323a16f9-f160-44e0-96c3-2cb2e263f39b');
INSERT INTO "Application" ("id", "description", "status", "dockerContainerId", "codeUrl", "userId") VALUES ('3ea8e47a-8bfe-45b1-97a1-d57520ad9f68', 'Ecommerce site for handmade crafts', 'failed', 'mno345pqr678', 'https://i.imgur.com/YfJQV5z.png?id=169', '6de21f07-aabe-4aa9-95f8-265ddaa2eab5');

INSERT INTO "Notification" ("id", "message", "isRead", "userId") VALUES ('30b7b638-14cf-41e3-9979-b4dbbdb3522b', 'Your session will expire in 5 minutes.', true, 'f5ef19c1-782c-49cc-85d4-4e0291fa0bf8');
INSERT INTO "Notification" ("id", "message", "isRead", "userId") VALUES ('f8b36630-66a8-43f2-b625-376905e73054', 'Your session will expire in 5 minutes.', true, '6909b2fb-d494-42ba-b3e9-a4b15efba3be');
INSERT INTO "Notification" ("id", "message", "isRead", "userId") VALUES ('edfb5c8d-1114-48e4-b432-501835c9dec0', 'A new version of your app is available.', true, '4f417059-d4d1-4540-a460-498c0bc1bab7');
INSERT INTO "Notification" ("id", "message", "isRead", "userId") VALUES ('0292b59b-03a5-489b-b4a2-3f7ea6808ec5', 'A new version of your app is available.', true, '6909b2fb-d494-42ba-b3e9-a4b15efba3be');
INSERT INTO "Notification" ("id", "message", "isRead", "userId") VALUES ('6c0d6a0d-3a66-437d-8bf9-183bbd693c1f', 'Your session will expire in 5 minutes.', true, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Notification" ("id", "message", "isRead", "userId") VALUES ('5d8b7016-df01-49e9-a8d4-be5f3b0116b5', 'Your subscription has been successfully renewed.', false, '6909b2fb-d494-42ba-b3e9-a4b15efba3be');
INSERT INTO "Notification" ("id", "message", "isRead", "userId") VALUES ('aeb20a72-b084-47b3-8b5f-ebeb57323f01', 'Your subscription has been successfully renewed.', false, 'b5a689ce-a1ef-475c-ae65-9e691bfa788e');
INSERT INTO "Notification" ("id", "message", "isRead", "userId") VALUES ('21f532c2-87b9-484f-a82a-b65ac57d8fa2', 'Your session will expire in 5 minutes.', true, 'b85de096-cc45-4e9e-964d-a1b3227a580e');
INSERT INTO "Notification" ("id", "message", "isRead", "userId") VALUES ('f0f7e34a-9dd2-44f2-aef9-62d42b25da04', 'A new version of your app is available.', true, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Notification" ("id", "message", "isRead", "userId") VALUES ('993c99cc-db33-49b1-be84-18a705e53485', 'Your subscription has been successfully renewed.', true, '6909b2fb-d494-42ba-b3e9-a4b15efba3be');

INSERT INTO "SupportTicket" ("id", "subject", "message", "status", "userId") VALUES ('5b3b398a-b601-4a63-8b36-3310c1b9f28a', 'Login Issue', 'My payment did not go through but I was charged.', 'In Progress', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "SupportTicket" ("id", "subject", "message", "status", "userId") VALUES ('ec5af237-4c31-49d6-9e1b-d414b066a4d1', 'Account Suspension', 'The dashboard crashes whenever I try to generate code.', 'In Progress', 'b5a689ce-a1ef-475c-ae65-9e691bfa788e');
INSERT INTO "SupportTicket" ("id", "subject", "message", "status", "userId") VALUES ('2f784570-40e9-4d17-808e-e6daf12b9615', 'Login Issue', 'My payment did not go through but I was charged.', 'In Progress', '07fcd2e0-7233-42d8-ac74-0887121c1028');
INSERT INTO "SupportTicket" ("id", "subject", "message", "status", "userId") VALUES ('a47c6f38-3ec6-4710-bb46-aa292bb2121a', 'Account Suspension', 'I am unable to log into my account despite entering the correct credentials.', 'Open', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "SupportTicket" ("id", "subject", "message", "status", "userId") VALUES ('8dd338c2-f100-41e1-8275-4775a2fcb000', 'Feature Request', 'The dashboard crashes whenever I try to generate code.', 'In Progress', '07fcd2e0-7233-42d8-ac74-0887121c1028');
INSERT INTO "SupportTicket" ("id", "subject", "message", "status", "userId") VALUES ('4956381a-cad1-4f77-b5a9-79f471f30e40', 'Bug Report', 'I am unable to log into my account despite entering the correct credentials.', 'Closed', '6de21f07-aabe-4aa9-95f8-265ddaa2eab5');
INSERT INTO "SupportTicket" ("id", "subject", "message", "status", "userId") VALUES ('e252e02e-800d-4dea-ae8c-e5aba5b1e67d', 'Feature Request', 'My payment did not go through but I was charged.', 'Open', '07fcd2e0-7233-42d8-ac74-0887121c1028');
INSERT INTO "SupportTicket" ("id", "subject", "message", "status", "userId") VALUES ('1accdc8b-3530-4f2f-8cbc-3f0072f22609', 'Login Issue', 'The dashboard crashes whenever I try to generate code.', 'Closed', '6de21f07-aabe-4aa9-95f8-265ddaa2eab5');
INSERT INTO "SupportTicket" ("id", "subject", "message", "status", "userId") VALUES ('3393b99d-365d-4515-acf6-4218aac826dc', 'Payment Failure', 'The dashboard crashes whenever I try to generate code.', 'Open', '323a16f9-f160-44e0-96c3-2cb2e263f39b');
INSERT INTO "SupportTicket" ("id", "subject", "message", "status", "userId") VALUES ('501b2295-527f-4377-9636-e5e4a373529b', 'Payment Failure', 'My account was suspended without any notification.', 'Closed', '323a16f9-f160-44e0-96c3-2cb2e263f39b');

INSERT INTO "Subscription" ("id", "status", "startDate", "endDate", "userId", "planId") VALUES ('9d666b92-5396-4731-b50c-939a67738952', 'canceled', '2024-01-03T21:38:54.254Z', '2024-02-03T10:31:15.987Z', '8a923a78-31b3-4c03-9f07-852d1018e2f6', 'e7c3f7a1-5e26-4f49-95d2-d74ed5b37033');
INSERT INTO "Subscription" ("id", "status", "startDate", "endDate", "userId", "planId") VALUES ('b7c17980-b1e7-4c75-abbe-20778508be25', 'expired', '2024-09-14T03:14:28.336Z', '2024-02-20T00:50:33.965Z', 'b5a689ce-a1ef-475c-ae65-9e691bfa788e', '1330fd28-590a-4163-91c2-745e6286df41');
INSERT INTO "Subscription" ("id", "status", "startDate", "endDate", "userId", "planId") VALUES ('5121d561-7907-4872-bf14-5551c9867e42', 'pending', '2024-10-17T08:26:18.220Z', '2025-07-10T07:22:04.023Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '393578b9-4e93-4b81-bb32-41fbc3e6465f');
INSERT INTO "Subscription" ("id", "status", "startDate", "endDate", "userId", "planId") VALUES ('6fa014dc-f3fd-45d3-b2fe-e23213b81048', 'inactive', '2025-09-13T01:03:27.565Z', '2024-12-19T13:56:06.162Z', '8a923a78-31b3-4c03-9f07-852d1018e2f6', '26ee1628-9f8d-42c5-bc2d-9c9cec4995da');
INSERT INTO "Subscription" ("id", "status", "startDate", "endDate", "userId", "planId") VALUES ('4e1e72bd-039a-45b4-a355-3964c9e4bace', 'active', '2025-09-14T05:36:55.428Z', '2024-06-27T05:22:44.407Z', '323a16f9-f160-44e0-96c3-2cb2e263f39b', 'e7c3f7a1-5e26-4f49-95d2-d74ed5b37033');
INSERT INTO "Subscription" ("id", "status", "startDate", "endDate", "userId", "planId") VALUES ('778839fd-6fcc-48c6-aa57-47bd5adb598e', 'pending', '2023-11-24T01:00:42.167Z', '2025-03-06T05:19:00.406Z', 'b5a689ce-a1ef-475c-ae65-9e691bfa788e', 'b795b19b-7293-4814-827e-222e9ab5c5f9');
INSERT INTO "Subscription" ("id", "status", "startDate", "endDate", "userId", "planId") VALUES ('6147a525-083f-42fd-bb71-e2834c5e0afb', 'pending', '2025-06-20T17:24:59.238Z', '2024-10-07T10:38:38.854Z', '6909b2fb-d494-42ba-b3e9-a4b15efba3be', 'e7c3f7a1-5e26-4f49-95d2-d74ed5b37033');
INSERT INTO "Subscription" ("id", "status", "startDate", "endDate", "userId", "planId") VALUES ('907ccf31-301f-4d03-97d0-f8d3ad31fd74', 'active', '2024-06-06T15:36:48.350Z', '2024-10-06T18:37:00.252Z', '07fcd2e0-7233-42d8-ac74-0887121c1028', '1f05c5e7-90de-4e40-8155-8710943533bb');
INSERT INTO "Subscription" ("id", "status", "startDate", "endDate", "userId", "planId") VALUES ('1587eede-0af4-49ab-9b5c-ddb66d488e11', 'pending', '2024-06-22T13:46:48.657Z', '2025-07-30T20:32:55.486Z', '323a16f9-f160-44e0-96c3-2cb2e263f39b', '1f05c5e7-90de-4e40-8155-8710943533bb');
INSERT INTO "Subscription" ("id", "status", "startDate", "endDate", "userId", "planId") VALUES ('39eedaa4-bebb-43ac-9bf3-2303b035ea81', 'expired', '2024-03-02T08:34:40.220Z', '2025-02-28T03:51:36.978Z', '8a923a78-31b3-4c03-9f07-852d1018e2f6', '04a748d0-8e7b-4b69-8703-a787f4499a4f');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
