-- CreateTable
CREATE TABLE "Configuration" (
    "id" TEXT NOT NULL,
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "croppedImage" TEXT,

    CONSTRAINT "Configuration_pkey" PRIMARY KEY ("id")
);
