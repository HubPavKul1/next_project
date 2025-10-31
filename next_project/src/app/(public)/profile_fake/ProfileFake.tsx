import dynamic from "next/dynamic";

// отсроченная загрузка компонента в данном случае кнопки для оптимизации загрузки страницы

const DynamicProfileFakeButton = dynamic(() =>
  import("./ProfileFakeButton").then((mod) => mod.ProfileFakeButton)
);

export function ProfileFake() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">ProfileFake</h1>
      <DynamicProfileFakeButton />
    </div>
  );
}
