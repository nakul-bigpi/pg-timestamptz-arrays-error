INSERT INTO prismalocal."Metadata" (
  "id",
  "fieldName",
  "dateListValues"
) VALUES(
  gen_random_uuid(),
  'inductionDates',
  ARRAY[now(), now()]::timestamp with time zone[]::timestamp(0) with time zone[]
);