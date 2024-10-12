import React from "react";

export type IconProps = React.HTMLAttributes<SVGElement>;

export default function IllustrationIcons(props: IconProps) {
  return (
    <svg
      width="154"
      height="154"
      viewBox="0 0 154 154"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M110.866 37.6218C112.111 38.406 113.097 39.539 113.702 40.8797C114.515 42.7814 115.086 44.7771 115.404 46.8204C114.934 46.8328 114.467 46.8919 114.009 46.9967C113.955 46.9967 113.649 47.1577 113.595 47.3263C113.35 48.1762 113.163 49.0418 113.036 49.9173L97.7046 50.0093C97.5283 50.0093 97.5513 50.2162 97.7046 50.2239C97.7046 50.2239 111.702 50.4385 113.036 50.4462C112.698 53.2364 112.982 56.3026 114.96 58.2803C116.822 60.1201 123.154 60.3807 125.507 58.6253C127.462 57.1612 127.945 52.9298 127.807 50.4462C128.267 50.4462 138.631 50.2622 139.658 50.2239C139.686 50.2239 139.714 50.2126 139.734 50.1925C139.754 50.1723 139.765 50.145 139.765 50.1166C139.765 50.0881 139.754 50.0608 139.734 50.0407C139.714 50.0206 139.686 50.0093 139.658 50.0093C137.91 50.0093 127.784 49.9326 127.784 49.9326C127.577 47.633 127.017 47.403 127.017 47.2957C127.011 47.2247 126.983 47.1575 126.936 47.1038C126.889 47.0501 126.826 47.0126 126.757 46.9967C126.09 46.8664 125.413 46.7971 124.733 46.7898C125.806 45.065 126.726 40.3737 128.413 37.2309C130.912 32.5473 140.317 37.0086 140.164 32.8692C139.98 28.2699 134.875 25.6866 129.394 28.1243C124.189 30.4239 122.832 41.1556 122.74 46.7591C121.169 46.7591 121.928 46.8051 119.674 46.7591C121.644 44.1375 124.151 35.3988 123.714 29.2894C123.213 25.235 121.507 21.4242 118.815 18.3507C116.454 15.7061 113.687 14.587 111.602 16.7103C108.536 19.7765 111.357 23.203 113.978 26.6755C116.861 30.5082 117.941 32.4169 118.332 37.8748C118.516 40.8359 118.459 43.807 118.164 46.7591H117.313C117.972 44.6051 117.121 39.8601 116.5 37.6295C115.611 34.479 114.093 31.3054 111.686 29.1208C108.843 26.6656 105.385 25.0306 101.683 24.3912C99.4216 24.0079 97.4899 24.1535 96.4398 24.7821C96.0536 24.983 95.7553 25.3196 95.6025 25.7272C95.4497 26.1348 95.453 26.5845 95.6119 26.9898C96.8844 31.1521 105.884 34.5556 110.866 37.6218ZM129.547 28.6149C134.675 26.3152 139.397 28.7298 139.558 32.8999C139.681 36.0964 130.459 32.1333 127.945 37.0316C126.197 40.4197 125.423 45.157 124.365 46.7974H123.821C124.587 43.4169 126.466 35.8971 128.673 33.2371C131.494 29.7953 136.408 31.8037 136.622 31.75C136.707 31.75 136.791 31.6121 136.538 31.5201C133.472 30.4086 130.352 30.4316 128.267 32.8999C125.76 35.8587 124.181 42.9877 123.522 46.8204H122.863C123.07 41.4546 124.572 30.7995 129.547 28.6149ZM118.723 37.8671C118.417 32.4553 117.42 30.4699 114.392 26.3689C111.909 23.0344 109.249 19.8532 111.993 17.0706C113.863 15.1696 116.301 16.3041 118.417 18.6957C121.007 21.6946 122.641 25.4001 123.108 29.3354C123.606 35.5445 121.077 44.4594 119.275 46.7668H118.869C119.689 43.2568 120.22 39.6855 120.456 36.0887C120.632 33.0225 120.578 30.8915 119.689 28.2239C118.959 26.1928 117.944 24.2753 116.677 22.5284C116.072 21.6668 115.406 20.8496 114.684 20.0831C114.665 20.0608 114.639 20.0466 114.61 20.0437C114.581 20.0409 114.553 20.0495 114.53 20.0678C114.508 20.0861 114.494 20.1125 114.491 20.1413C114.488 20.17 114.497 20.1988 114.515 20.2211C114.707 20.4218 114.886 20.6343 115.052 20.8574C117.443 23.9236 119.804 28.4002 119.988 32.3556C120.172 36.311 119.383 42.911 118.654 46.8204H118.44C118.778 43.8487 118.873 40.8543 118.723 37.8671ZM126.535 47.6483C127.799 48.8058 127.401 56.4943 125.109 58.2113C122.817 59.9284 116.845 59.5221 115.22 57.9507C112.66 55.4901 112.921 50.8831 113.794 47.4643C113.849 47.536 113.924 47.5894 114.009 47.6176C114.598 47.7536 115.199 47.8358 115.803 47.8629C115.052 50.6447 115.184 53.5909 116.178 56.295C116.215 56.3722 116.281 56.4318 116.361 56.4605C116.442 56.4893 116.53 56.4849 116.608 56.4483C116.685 56.4117 116.744 56.3459 116.773 56.2654C116.802 56.1849 116.798 56.0963 116.761 56.019C115.795 54.0873 115.535 49.7946 116.094 47.9166C118.486 48.0239 124.886 48.0699 126.535 47.6483ZM111.357 29.5117C116.554 34.111 117.888 44.2985 117.083 46.7821H116.608C116.499 44.652 116.128 42.5435 115.504 40.504C113.848 35.1382 111.073 31.842 106.819 29.3584C104.596 28.0872 102.218 27.1106 99.7436 26.4532C99.7151 26.4461 99.685 26.4505 99.6598 26.4656C99.6347 26.4807 99.6166 26.5052 99.6094 26.5337C99.6023 26.5621 99.6068 26.5923 99.6219 26.6174C99.637 26.6426 99.6615 26.6607 99.6899 26.6678C102.579 27.5837 105.32 28.9107 107.831 30.6079C110.614 32.4611 112.788 35.0961 114.078 38.1814C115.302 40.9086 116.079 43.8154 116.378 46.7898H115.657C115.374 44.6858 114.828 42.6256 114.032 40.6574C113.41 39.242 112.39 38.0381 111.096 37.1925C106.029 34.0727 97.2983 30.6539 96.1331 26.8211C95.0523 23.3027 105.47 24.2378 111.357 29.5117ZM45.0732 68.9814C34.8628 65.4323 25.7102 63.8455 20.0147 62.412C19.9442 62.3922 19.8704 62.3868 19.7977 62.3962C19.7251 62.4056 19.655 62.4296 19.5919 62.4667C19.5287 62.5038 19.4736 62.5533 19.4301 62.6122C19.3865 62.6711 19.3552 62.7382 19.3382 62.8094C19.3211 62.8807 19.3186 62.9546 19.3309 63.0269C19.3431 63.0991 19.3698 63.1682 19.4094 63.2298C19.4489 63.2915 19.5005 63.3445 19.5611 63.3858C19.6216 63.427 19.6899 63.4556 19.7618 63.4699C23.4259 64.3514 28.9604 65.3633 34.9471 66.7507C44.8356 69.0504 45.0502 69.7326 45.2112 69.2573C45.2284 69.2024 45.2236 69.143 45.1979 69.0915C45.1722 69.0401 45.1275 69.0006 45.0732 68.9814ZM125.983 75.1828C125.983 75.1646 125.979 75.1467 125.972 75.13C125.965 75.1132 125.955 75.098 125.942 75.0852C125.929 75.0724 125.914 75.0622 125.897 75.0553C125.881 75.0484 125.863 75.0448 125.845 75.0448C119.122 75.0448 112.583 76.5779 108.881 76.9228C108.836 76.9266 108.792 76.9395 108.752 76.9606C108.712 76.9817 108.677 77.0106 108.648 77.0456C108.619 77.0807 108.598 77.1211 108.585 77.1646C108.573 77.208 108.569 77.2535 108.574 77.2984C108.578 77.3438 108.591 77.388 108.612 77.4284C108.633 77.4688 108.662 77.5046 108.697 77.5338C108.732 77.563 108.772 77.585 108.815 77.5986C108.859 77.6121 108.905 77.6169 108.95 77.6127C111.663 77.3444 116.362 76.3173 120.762 75.75C125.645 75.1828 125.99 75.5277 125.983 75.1828ZM102.825 91.1347C102.832 91.1221 102.836 91.1084 102.837 91.0942C102.838 91.08 102.837 91.0658 102.833 91.0522C102.828 91.0387 102.821 91.0261 102.812 91.0153C102.803 91.0044 102.792 90.9955 102.779 90.989L102.587 90.8894L102.541 91.1193C102.672 91.1807 102.771 91.2803 102.825 91.1347Z"
        fill="black"
      />
      <path
        d="M149.385 93.0512C147.415 92.6449 142.547 92.8059 140.539 92.9822C142.195 87.3251 143.904 79.9509 144.594 75.8882C144.844 74.7639 144.952 73.6128 144.916 72.4617C144.891 72.3583 144.844 72.2613 144.78 72.1769C144.715 72.0924 144.633 72.0223 144.54 71.9711C141.474 70.047 109.348 74.2707 107.11 75.3822C106.443 75.7118 105.845 77.3753 105.577 78.1265C103.591 74.861 103.798 74.0868 101.583 68.9279C100.202 65.5676 98.4514 62.3718 96.3626 59.3997C96.4163 58.9934 98.5396 43.1335 96.263 38.8944C94.7299 36.0582 86.4281 35.0617 83.2316 34.7934C83.2316 34.6248 82.833 31.7272 82.6644 30.4164C85.3626 28.1627 86.4971 24.0157 83.5689 23.3182C81.4915 22.8276 73.2895 21.2638 67.1801 22.8429C63.3473 23.8394 60.2811 26.0777 60.0205 30.5084C59.9176 32.1908 60.0205 33.8795 60.3271 35.537C56.364 35.9739 49.5418 36.6255 46.0616 37.9363C41.585 39.6227 43.4707 59.208 43.9459 60.7948C43.6853 61.4387 43.44 62.0903 43.2177 62.6958C32.0644 59.8519 7.09788 54.5474 5.98638 54.647C5.69687 54.6435 5.41099 54.7117 5.1542 54.8454C4.8974 54.9792 4.67768 55.1744 4.51461 55.4136C4.21565 55.4826 4.10833 55.9042 4.05468 56.1801C3.28813 60.2582 4.67558 84.6115 4.92088 88.7432C5.32715 90.2303 17.1397 93.4575 18.6728 93.8791C18.7494 95.8951 19.1557 105.906 19.24 107.961C18.5731 107.839 17.913 107.683 17.2623 107.493C15.8979 106.933 10.67 112.023 11.1299 111.602C9.12924 113.38 30.8993 119.229 32.6393 118.738C34.3794 118.248 37.8212 114.959 37.2386 113.127C37.0775 112.801 36.8059 112.543 36.4721 112.399C34.824 111.533 30.4623 110.467 28.6456 110.03C28.8219 106.32 28.8219 100.234 28.8142 96.539C30.9682 97.0756 43.1947 100.034 45.4024 99.9961C45.5606 99.9984 45.7167 99.9587 45.8546 99.8812C46.5599 99.7815 47.3877 99.6052 47.4567 98.8847C47.4567 98.67 47.633 96.7996 47.8553 94.0247C53.2595 96.0867 59.8135 95.9334 60.9787 95.4582C61.2928 95.3067 61.5583 95.0704 61.7452 94.7759C61.7989 94.8449 61.8219 94.8296 62.2282 94.8909C63.7613 95.1362 66.2142 95.3662 67.594 94.6456C69.5487 94.9599 75.2135 95.4122 75.6351 93.5188C75.6888 93.2658 75.7654 92.7523 75.8421 92.1313C81.5146 92.438 101.659 92.3 101.736 92.3L101.269 94.408C101.257 94.3906 101.241 94.3765 101.222 94.3672C101.203 94.3578 101.182 94.3533 101.161 94.3543C101.161 94.3084 101.161 94.293 101.161 94.3543C98.0223 94.107 94.8725 94.0251 91.725 94.109C90.6058 94.1627 87.6546 94.3007 87.601 95.3892C87.209 96.3143 87.152 97.3472 87.44 98.3097C87.6086 98.9153 89.0344 99.8965 89.5633 100.257C86.5661 99.9578 84.8184 100.073 83.9139 100.395C83.6987 100.432 83.4982 100.529 83.3346 100.673C83.171 100.818 83.0507 101.005 82.9872 101.214C82.9236 101.423 82.9193 101.646 82.9746 101.857C83.03 102.068 83.1428 102.26 83.3006 102.411C84.3278 103.821 86.4665 104.296 86.6964 106.144C87.1334 109.647 78.226 113.61 74.9759 114.998C76.6086 112.851 80.9856 106.098 78.8623 104.465C76.5013 102.648 56.2567 101.851 54.394 102.326C53.0832 102.664 43.4477 109.785 43.624 112.292C43.7466 113.924 53.2289 115.526 54.9919 115.833C56.9773 116.17 71.1431 118.378 72.8372 117.297C73.1965 117.152 73.5229 116.936 73.7968 116.662C74.0708 116.388 74.2867 116.062 74.4316 115.703C77.367 114.694 80.1922 113.389 82.8637 111.809C87.0797 109.195 89.4407 105.96 85.2706 103.239C84.7724 102.917 83.4079 101.936 83.6072 101.384C84.0365 100.165 89.9619 100.617 90.0463 100.617C92.7982 102.411 98.0644 105.178 101.169 105.983C104.45 106.849 119.781 105.17 123.483 104.703C123.905 106.236 124.311 107.662 124.579 108.536C124.004 108.582 122.364 108.727 121.904 109.087C121.651 109.287 121.659 109.624 122.065 109.854C122.065 112.422 121.751 120.103 122.517 123.568C122.809 124.863 123.146 125.4 124.487 125.867C127.025 126.687 131.9 126.396 134.452 125.714C136.039 125.285 136.246 124.947 136.499 124.104C137.373 121.237 137.327 112.775 137.266 109.77C137.315 109.734 137.355 109.687 137.382 109.634C137.41 109.58 137.424 109.52 137.424 109.459C137.424 109.399 137.41 109.339 137.382 109.285C137.355 109.231 137.315 109.184 137.266 109.149C136.699 108.886 136.088 108.73 135.464 108.689C135.572 107.83 136.147 103.032 136.231 102.188C136.632 101.948 136.989 101.642 137.289 101.284C137.757 100.714 138.062 100.028 138.17 99.2986C138.937 98.2944 140.041 94.546 140.401 93.3195C143.82 93.4651 148.833 93.2658 149.301 93.3195C149.336 93.3307 149.375 93.3273 149.408 93.31C149.441 93.2928 149.466 93.2631 149.477 93.2275C149.488 93.1919 149.485 93.1534 149.467 93.1203C149.45 93.0872 149.42 93.0624 149.385 93.0512ZM45.7703 109.593C46.2839 109.026 46.8895 108.436 47.5334 107.838C50.27 105.308 53.7501 102.763 54.509 102.572C56.3487 102.096 76.555 103.338 78.6093 104.871C78.9543 105.132 79.0233 105.638 78.9543 106.244C78.6783 108.651 76.164 112.621 74.6999 114.561C73.0442 113.135 47.9627 109.892 45.7703 109.593ZM83.3313 35.3453C86.2595 35.6213 94.4692 36.5641 95.8797 39.1244C97.8727 42.7272 96.6462 55.015 96.1557 59.0547C95.7264 58.4798 95.2818 57.9355 94.8295 57.4373C92.2309 54.5857 87.7696 53.1523 83.9905 52.4241C81.5629 52.0013 79.1139 51.7122 76.6546 51.5579C76.578 51.5579 76.7006 51.6728 76.095 50.431C75.1905 48.5683 75.1369 48.599 75.2288 48.5453C76.2339 48.4918 77.2294 48.322 78.1954 48.0394C80.7863 47.2728 82.3271 45.7397 83.0553 42.0143C83.4507 39.8062 83.5333 37.5534 83.3006 35.3223L83.3313 35.3453ZM76.7313 51.7955C77.2142 51.8645 77.3445 51.8568 77.3828 51.8798C77.3828 52.0714 79.0616 61.0784 73.3125 61.4923C68.5599 61.8833 65.4323 55.2143 63.7459 50.7606C64.3592 50.661 64.8498 50.592 65.1794 50.546C65.3403 54.0415 70.3689 60.3808 73.1592 59.9362C76.2943 59.4227 77.8351 54.6547 76.7313 51.7955ZM65.2867 37.691C65.3554 37.349 65.5085 37.0296 65.7321 36.7618C65.9556 36.4941 66.2426 36.2865 66.5668 36.1579C68.0999 35.7823 68.0999 37.691 69.3187 37.5836C70.8518 37.484 69.1424 33.9272 70.4609 31.7579C71.8943 29.3662 77.7048 34.2032 82.4037 30.6157C82.971 34.6554 83.5919 37.7983 82.7257 41.9223C81.9591 45.5404 80.5334 46.8742 78.0727 47.5948C77.0616 47.8276 76.0378 48.0016 75.0065 48.116C74.9243 48.1625 74.8551 48.2291 74.8055 48.3095C74.7559 48.3899 74.7275 48.4816 74.7229 48.576C74.7229 48.8443 75.4895 50.2164 76.2024 51.8185C77.2679 54.3328 75.8804 58.9014 73.0748 59.3383C71.0818 59.6526 67.1801 55.1836 66.0686 52.0255C65.578 50.6303 65.7236 50.5767 66.5898 45.1265C67.8086 45.2108 68.0616 42.8269 68.1229 41.5927C68.1356 41.3311 68.0447 41.075 67.87 40.8798C67.318 40.2742 66.8658 40.9795 65.7926 39.638C65.5584 39.3777 65.3903 39.065 65.3022 38.7262C65.2142 38.3873 65.2088 38.0323 65.2867 37.691ZM60.4344 36.0889C61.4616 40.7802 64.1599 44.038 66.0149 44.9425C65.6776 47.0965 65.2944 49.4958 65.1947 50.2241C60.7715 50.4459 56.4094 51.351 52.263 52.907C50.4217 53.612 48.7058 54.6085 47.1808 55.8582C46.3376 51.4889 48.5069 42.9495 48.2386 40.5272C48.116 39.5 47.8247 38.4115 46.8205 38.1892C50.2546 37.1084 56.617 36.4951 60.4344 36.0889ZM46.3606 38.3885C46.5438 38.3948 46.7238 38.438 46.8898 38.5158C47.0558 38.5935 47.2043 38.7041 47.3264 38.8408C47.672 39.3623 47.8462 39.9786 47.8247 40.6039C47.9933 42.9035 45.6093 51.3815 46.9508 56.0805C45.6587 57.2921 44.6801 58.7994 44.0992 60.4728C43.486 56.7397 42.4665 39.7453 46.3606 38.3885ZM18.8184 73.3125C18.8798 72.9523 19.539 72.7913 19.8993 72.73C22.5592 72.293 28.086 73.8108 27.9634 75.6582C27.7794 78.3948 28.6226 111.556 27.902 112.775C27.0435 114.239 22.3522 113.426 20.4818 112.123C19.631 111.533 19.6463 111.027 19.6693 111.126C19.0177 85.0254 18.7111 73.9105 18.8184 73.3125ZM36.5871 113.38C36.978 114.683 33.9041 117.68 32.4783 118.079C31.0526 118.478 10.0338 113.035 11.4059 111.793C10.7697 112.368 14.8247 108.635 16.6108 108.037C16.7531 107.966 16.9158 107.947 17.0707 107.984C17.2777 108.076 18.0902 108.283 19.263 108.559C19.332 110.176 19.378 111.134 19.378 111.134C19.8303 113.388 27.0435 115.09 28.3006 113.012C28.4931 112.276 28.5961 111.519 28.6073 110.759C29.7801 111.05 35.7975 112.514 36.5871 113.38ZM45.4024 99.3446C43.3864 99.4212 30.8379 96.4777 28.8142 96.0024C28.7759 87.0185 28.5919 76.946 28.6839 75.7042C28.8679 72.8833 21.693 71.3502 19.1634 72.1781C18.9127 72.2331 18.6823 72.3569 18.4982 72.5357C18.314 72.7144 18.1833 72.941 18.1209 73.1899C17.9522 74.2094 18.6115 92.3536 18.6498 93.4421C17.4003 93.1049 5.69509 89.985 5.21217 88.7355C5.08185 85.9146 3.83238 58.6408 4.72157 56.0575C8.89161 57.1 44.5055 64.2826 47.0121 66.0227C47.6407 67.7474 46.2073 96.907 45.4024 99.3446ZM47.2038 98.8923C47.2038 99.4059 46.5215 99.5822 46.0156 99.6589C46.8435 97.6735 48.4916 67.4638 47.6484 65.6854C46.8052 63.907 8.34736 56.4331 4.75224 55.4289C4.91212 55.2559 5.10678 55.1187 5.32344 55.0262C5.54009 54.9338 5.77385 54.8881 6.00938 54.8923C7.07488 54.8157 46.3989 63.6004 48.6832 64.8575C49.0665 65.9613 48.6832 73.6498 48.6296 74.9146C48.4916 77.9655 47.2344 98.4784 47.2038 98.8923ZM67.9006 93.7028C67.0038 94.8986 63.8226 94.7529 62.3278 94.615H61.9599C62.6418 93.2439 63.0283 91.7449 63.0944 90.215C63.8609 90.0003 66.6665 89.3488 67.0957 90.0387C67.2261 90.238 66.8121 90.4756 66.5975 90.5906C66.0307 90.8536 65.4369 91.054 64.8268 91.1885C64.7363 91.2058 64.6564 91.2583 64.6046 91.3345C64.5529 91.4107 64.5335 91.5043 64.5508 91.5948C64.5681 91.6852 64.6206 91.7651 64.6968 91.8169C64.773 91.8686 64.8666 91.888 64.9571 91.8707C65.7236 91.7634 67.8163 91.4721 68.5599 91.7251C68.2535 92.1502 67.8136 92.4606 67.3104 92.6066C66.5937 92.6017 65.8779 92.6607 65.1717 92.7829C65.0699 92.8021 64.9788 92.8581 64.9157 92.9402C64.8526 93.0223 64.8219 93.1248 64.8295 93.2281C64.8371 93.3313 64.8824 93.4282 64.9568 93.5002C65.0312 93.5722 65.1296 93.6143 65.233 93.6185C66.0117 93.6411 66.7887 93.5349 67.5327 93.3042C67.7266 93.3122 67.9169 93.3591 68.0923 93.4421C68.0431 93.5453 67.9694 93.6348 67.8776 93.7028H67.9006ZM75.1522 93.4345C75.1197 93.5539 75.0589 93.6637 74.9748 93.7544C74.8907 93.8452 74.7859 93.9143 74.6693 93.9557C73.2511 94.7223 69.6713 94.5843 68.0769 94.4233C68.6672 93.9711 69.0121 93.2352 68.4142 92.8289C69.5947 92.0624 69.4721 91.2422 68.6978 91.0045C68.1964 90.883 67.6782 90.8467 67.1647 90.8972C67.6477 90.5369 67.824 90.1307 67.5327 89.6937C67.1111 89.0958 65.9996 89.1725 65.3097 89.2874C64.9814 86.2526 64.8125 83.2027 64.8038 80.1502C66.8504 81.6373 73.6344 81.6833 76.0031 80.2728C76.118 82.8484 75.3438 92.3153 75.1215 93.4345H75.1522ZM68.5752 91.6944C68.5752 91.6944 68.5522 91.7097 68.5522 91.6944H68.5752ZM85.0253 91.8631C86.4435 87.716 86.6428 78.9314 86.5584 74.539C87.7466 76.4477 94.2239 85.6003 94.2699 85.677C94.4273 85.9177 94.6125 86.139 94.8219 86.3362C96.3664 87.7477 98.1002 88.9371 99.9731 89.87C101.974 90.9279 102.135 90.8742 102.119 90.9585L101.851 92.1084C101.721 92.1007 86.1982 91.8631 85.0024 91.8631H85.0253ZM88.3292 95.3049C89.9773 94.155 101.184 94.6763 101.307 94.5996V94.684C100.234 99.8198 99.8198 101.675 99.6894 102.349C99.7584 102.051 100.18 100.05 100.663 97.8345C101 96.2094 101.43 94.2777 101.866 92.231C102.066 91.2958 102.196 90.6979 102.204 90.6519C100.103 89.5404 96.8992 87.624 95.2205 85.93C94.7989 85.5007 86.6504 74.2094 86.5738 74.0791C86.4971 73.9488 86.4971 70.5836 86.4128 70.4303C86.3967 70.4129 86.3757 70.4009 86.3526 70.3959C86.3294 70.3909 86.3053 70.3932 86.2835 70.4024C86.2617 70.4116 86.2433 70.4274 86.2307 70.4474C86.2182 70.4675 86.2122 70.491 86.2135 70.5146C86.1368 70.5146 86.2135 86.9035 84.7954 91.8401L75.9647 91.9244C76.0184 91.4951 76.072 90.9969 76.1334 90.4603C79.6902 90.9125 81.3076 87.0108 80.3647 83.8296C79.8051 82.0819 78.364 81.8136 76.7159 82.6568C76.7926 81.6362 76.7926 80.6112 76.7159 79.5906C76.787 79.4144 76.7993 79.22 76.751 79.0363C76.7026 78.8526 76.5963 78.6894 76.4477 78.5711C75.3055 77.4979 72.109 77.3829 70.5529 77.3829C68.9968 77.3829 65.7926 77.5056 64.6581 78.5711C64.5588 78.6479 64.4798 78.7479 64.4282 78.8624C63.8456 79.9125 64.9647 89.1188 65.1027 89.3181C64.4351 89.451 63.777 89.6277 63.1327 89.847V88.6205C63.0867 85.9453 54.532 84.4582 54.2407 82.9327C54.1411 82.4115 53.9801 81.2463 53.7961 79.8665C52.7613 72.293 52.9146 72.5843 52.7459 72.5843C52.7175 72.5843 52.6902 72.5956 52.67 72.6158C52.6499 72.6359 52.6386 72.6632 52.6386 72.6916C52.6386 72.8986 53.4665 81.2387 53.7654 83.0094C54.0644 84.7801 62.5578 86.4972 62.5961 88.6205C62.5961 90.2763 62.2281 94.385 60.7947 94.9752C59.9285 95.3432 53.2289 95.6805 47.886 93.8024C48.001 92.3153 50.132 65.693 49.1048 64.5126C48.7139 64.0603 44.1222 62.9105 43.5397 62.7648C45.8393 57.5523 47.5411 53.2596 63.5313 50.753C63.9754 52.2414 64.5183 53.6985 65.1564 55.1146C66.7815 58.5871 69.5334 62.3355 73.3431 62.0136C77.7201 61.638 78.4254 56.893 77.7278 52.562C77.6818 52.2554 77.6358 52.0561 77.5975 51.8798C79.7007 52.0903 81.7913 52.4127 83.8602 52.8457C87.4706 53.6122 91.909 55.0687 94.3849 57.8129C97.0602 60.7565 99.3982 65.3021 101.039 68.9355C103.4 74.1634 103.384 75.5125 105.416 78.5251C103.987 83.0322 102.79 87.6094 101.828 92.2387C101.521 93.6721 101.062 95.8568 100.625 97.8421C99.9884 100.908 99.6051 102.848 99.6435 102.441C99.5745 102.855 99.6435 102.84 99.6435 102.94C97.1444 101.825 94.7332 100.523 92.4302 99.0456C91.6253 98.509 87.5166 95.8798 88.3292 95.2895V95.3049ZM76.6546 84.2206C76.6546 83.8219 76.7006 83.454 76.7159 83.0707C78.1034 82.5111 79.3375 82.5955 79.7132 84.0442C80.4797 86.6735 79.2686 90.1766 76.1794 90.1766C76.1794 89.8087 76.3097 88.7585 76.325 88.6435C79.8511 89.1188 79.8281 82.6645 76.6546 84.2206ZM76.3557 88.3139C76.463 87.1028 76.555 85.8226 76.6316 84.6192C76.9987 84.5058 77.3914 84.5058 77.7585 84.6192C78.6706 84.9488 78.525 88.1146 76.3173 88.3139H76.3557ZM101.43 105.324C98.4799 104.359 95.6262 103.122 92.9055 101.629C92.1389 101.223 88.1682 99.061 87.8999 98.2254C87.6681 97.4794 87.6442 96.6843 87.8309 95.9258C88.8581 97.9265 95.3738 101.292 97.4665 102.28C98.4246 102.733 99.4133 103.117 100.425 103.43C103.967 104.695 119.16 102.664 122.893 102.204C122.939 102.365 123.261 103.599 123.384 104.044C120.133 104.419 104.48 106.129 101.391 105.324H101.43ZM135.679 124.602C134.56 125.553 127.845 126.35 124.679 125.369C123.529 125.009 123.299 124.641 123.023 123.476C122.772 122.211 122.613 120.93 122.548 119.643C124.119 120.609 127.002 120.854 128.849 120.908C131.632 120.969 134.368 120.908 136.606 119.643C136.56 120.455 136.3 124.073 135.679 124.602ZM136.629 119.344C135.117 119.991 133.491 120.327 131.846 120.333C129.654 120.44 124.518 120.425 122.533 119.367C122.448 117.926 122.395 116.385 122.372 114.952C123.138 115.871 127.224 116.285 128.857 116.339C131.77 116.4 134.475 116.339 136.806 114.959C136.806 114.883 136.783 116.699 136.637 119.344H136.629ZM136.806 114.691C132.973 116.623 123.46 115.749 122.364 114.691V109.977C124.802 110.843 134.437 110.782 136.852 109.977C136.836 110.858 136.844 112.652 136.813 114.691H136.806ZM135.273 109.532C135.3 109.54 135.329 109.537 135.355 109.524C135.38 109.511 135.4 109.49 135.411 109.463C135.411 109.463 135.411 109.325 135.457 109.08C135.951 109.148 136.438 109.258 136.913 109.409C135.234 110.176 125.131 110.245 122.609 109.501C122.592 109.496 122.577 109.485 122.566 109.471C122.556 109.456 122.55 109.439 122.55 109.421C122.55 109.403 122.556 109.385 122.566 109.371C122.577 109.356 122.592 109.346 122.609 109.34C123.312 109.149 124.03 109.021 124.756 108.957C124.806 109.17 124.884 109.376 124.986 109.57C125.047 109.632 125.147 109.639 125.139 109.486C125.131 109.333 122.617 99.4059 122.234 97.2212C122.626 97.352 123.044 97.3847 123.451 97.3166C123.859 97.2484 124.244 97.0815 124.572 96.8303C125.415 99.1913 128.105 109.816 128.266 109.816C128.296 109.814 128.323 109.801 128.343 109.779C128.363 109.758 128.374 109.73 128.374 109.701L128.151 108.666H129.209C129.209 108.811 129.294 109.555 129.301 109.609C129.309 109.662 129.531 109.793 129.516 109.509C129.516 108.819 128.872 97.3899 128.857 97.1829C128.967 97.1297 129.083 97.0886 129.202 97.0603C129.286 97.4742 131.984 108.405 132.191 109.256C132.191 109.333 132.191 109.463 132.337 109.432C132.482 109.402 132.421 109.264 132.337 108.765L133.51 108.85V108.98C133.51 109.103 133.701 109.072 133.724 108.98C133.724 109.064 135.15 94.3543 135.257 93.1815C135.459 93.3347 135.692 93.4432 135.939 93.5C136.186 93.5568 136.442 93.5606 136.691 93.5111C136.675 93.6261 135.104 109.478 135.265 109.532H135.273ZM128.374 94.293C128.283 93.5557 127.961 92.8661 127.454 92.323C128.504 92.6373 128.726 92.8672 128.987 93.5878C129.194 94.1618 129.25 94.7797 129.148 95.3815C129.044 95.7604 129.044 96.1601 129.148 96.539C129.023 96.5679 128.9 96.6063 128.78 96.654C128.305 95.2972 127.247 95.3125 127.247 93.9481C127.245 93.4548 127.173 92.9643 127.032 92.4916C127.404 93.1644 127.81 93.8169 128.251 94.4463C128.328 94.546 128.473 94.4003 128.381 94.293H128.374ZM128.757 103.967C128.795 104.342 129.094 107.6 129.171 108.428H128.075C127.845 107.393 127.5 105.86 127.109 104.22L128.757 103.967ZM128.711 103.377L126.963 103.607C126.81 102.97 126.649 102.326 126.488 101.69C127.193 101.591 127.883 101.483 128.55 101.376C128.581 101.706 128.688 103.039 128.719 103.377H128.711ZM131.095 103.024C130.972 102.441 130.673 101.123 130.65 101.046C131.317 100.931 133.586 100.54 134.054 100.448C134.054 100.778 133.924 102.173 133.893 102.526C133.149 102.687 132.199 102.855 131.08 103.024H131.095ZM133.862 103.024C133.724 105.009 133.51 108.329 133.502 108.513C133.103 108.513 132.682 108.497 132.237 108.467C132.053 107.539 131.264 103.821 131.21 103.568C132.245 103.361 133.134 103.177 133.87 103.001L133.862 103.024ZM135.326 92.5453C135.42 91.5739 135.571 90.6089 135.779 89.6554C135.983 89.594 136.199 89.5794 136.41 89.6126C136.621 89.6457 136.822 89.7258 136.997 89.847C136.951 90.8104 136.849 91.7702 136.691 92.7216C136.622 92.9899 136.606 93.0589 136.43 93.0819C136.085 93.1049 135.388 92.8136 135.334 92.5223L135.326 92.5453ZM136.331 101.683C136.4 101.115 136.469 100.54 136.53 99.9655C136.984 99.8702 137.43 99.7395 137.864 99.5746C137.622 100.43 137.081 101.17 136.338 101.66L136.331 101.683ZM137.611 98.9383C137.287 99.067 136.954 99.1695 136.614 99.2449C136.752 97.9571 137.565 90.4603 137.565 89.9313C137.565 89.1648 136.2 88.8812 135.495 89.1648C135.257 89.2721 135.188 89.7244 135.119 90.123C134.736 92.2617 134.284 97.5969 134.108 99.7662L130.512 100.425C129.616 96.516 129.692 96.7307 129.593 96.631C129.524 96.5658 129.434 96.5277 129.34 96.5237C129.269 96.1824 129.287 95.8286 129.393 95.4965C129.552 94.8335 129.531 94.1402 129.332 93.4881C129.23 93.014 128.957 92.5938 128.565 92.3077C127.942 91.9771 127.269 91.7493 126.572 91.6331C126.536 91.6232 126.497 91.6223 126.461 91.6302C126.424 91.6382 126.389 91.6548 126.36 91.6788C126.331 91.7028 126.307 91.7334 126.292 91.7681C126.277 91.8029 126.271 91.8406 126.273 91.8784C126.29 91.9435 126.31 92.0075 126.335 92.07C126.933 93.4958 126.519 94.1474 126.933 94.9982C127.347 95.8491 128.044 95.9794 128.297 96.9606C128.297 97.0373 128.512 100.579 128.519 100.793L126.35 101.138C126.197 100.556 125.147 96.4087 124.733 96.0024C123.966 95.2359 121.774 96.0944 121.666 96.769C121.597 97.1523 122.648 101.261 122.747 101.652C118.8 102.227 114.614 102.748 110.912 103.093C109.294 103.239 99.4135 104.143 99.9654 102.526C100.732 98.9843 102.265 92.484 102.572 91.1195V91.0122C102.572 90.8972 102.625 90.7822 102.572 91.1195C102.572 91.0045 102.618 90.9355 102.633 90.8972L104.549 83.4847C104.802 82.5725 106.542 76.3711 107.424 75.9341C109.379 74.9683 141.505 70.8136 144.218 72.6303C144.678 74.6003 139.029 98.0031 137.618 98.946L137.611 98.9383Z"
        fill="black"
      />
      <path
        d="M75.5126 37.2844V36.6942C75.5126 36.5986 75.4746 36.507 75.407 36.4394C75.3395 36.3718 75.2478 36.3339 75.1523 36.3339C75.056 36.3339 74.9636 36.3716 74.8948 36.4389C74.826 36.5063 74.7863 36.5979 74.7843 36.6942V37.3841C74.8013 37.4752 74.8528 37.5563 74.928 37.6105C75.0033 37.6647 75.0966 37.6878 75.1884 37.6749C75.2803 37.6621 75.3636 37.6143 75.4211 37.5416C75.4787 37.4689 75.5059 37.3767 75.4972 37.2844H75.5126ZM124.503 84.4579C124.28 84.2433 123.966 83.9903 123.675 84.0823C123.192 84.2356 122.709 85.4621 122.502 85.968C121.921 87.4778 121.459 89.031 121.122 90.6133C121.437 91.4258 126.741 90.3603 127.462 90.0077C127.692 89.9004 127.661 89.6244 127.584 89.3791C126.826 87.5851 125.785 85.9238 124.503 84.4579ZM121.329 90.5136C121.467 89.8774 123.215 85.0021 123.813 84.5575C124.74 85.0865 126.603 88.3366 127.101 89.5631C126.411 89.8391 121.728 91.0272 121.329 90.5136ZM58.9168 106.772C58.8401 106.826 57.169 107.884 57.0924 107.96C57.0742 107.968 57.0587 107.981 57.0478 107.997C57.0369 108.013 57.031 108.033 57.031 108.052C57.031 108.072 57.0369 108.091 57.0478 108.108C57.0587 108.124 57.0742 108.137 57.0924 108.144C57.5216 108.267 58.9551 108.428 59.392 108.474C69.8784 105.845 69.9474 105.845 69.8171 105.845C69.8876 105.835 69.9517 105.799 69.996 105.743C70.0403 105.687 70.0613 105.617 70.0547 105.546C70.0547 105.415 69.8478 104.511 69.7864 104.235L58.9168 106.772ZM79.2303 34.0802C79.445 34.0802 79.8666 34.1799 79.9509 34.1875C80.4161 34.2358 80.8773 34.3178 81.3307 34.4328L82.0206 34.5555C82.0468 34.562 82.0745 34.5591 82.0988 34.5472C82.1231 34.5354 82.1425 34.5153 82.1534 34.4906C82.1644 34.4659 82.1663 34.4381 82.1589 34.4121C82.1514 34.3861 82.135 34.3636 82.1126 34.3485C81.7126 34.0097 81.2274 33.787 80.7098 33.7046C80.1971 33.5947 79.6634 33.6401 79.1767 33.8349C79.1606 33.8385 79.1453 33.8451 79.1318 33.8545C79.1182 33.864 79.1067 33.8759 79.0978 33.8898C79.0889 33.9037 79.0828 33.9192 79.0799 33.9354C79.077 33.9517 79.0773 33.9683 79.0809 33.9844C79.0844 34.0005 79.091 34.0158 79.1005 34.0293C79.1099 34.0428 79.1219 34.0544 79.1357 34.0633C79.1496 34.0722 79.1651 34.0783 79.1813 34.0812C79.1976 34.0841 79.2142 34.0838 79.2303 34.0802ZM73.1593 34.7548C73.3662 34.7088 73.8108 34.6398 73.9258 34.6245C74.3903 34.523 74.8618 34.4564 75.3363 34.4252L76.1028 34.3409C76.1333 34.3409 76.1625 34.3287 76.1841 34.3072C76.2057 34.2856 76.2178 34.2564 76.2178 34.2259C76.2178 34.1954 76.2057 34.1661 76.1841 34.1446C76.1625 34.123 76.1333 34.1109 76.1028 34.1109C75.6087 33.9014 75.0666 33.8314 74.5355 33.9084C74.0044 33.9855 73.5045 34.2066 73.0903 34.5478C73.072 34.5478 73.0541 34.5522 73.0379 34.5605C73.0216 34.5688 73.0076 34.5808 72.997 34.5956C72.9863 34.6104 72.9793 34.6275 72.9766 34.6455C72.9738 34.6635 72.9754 34.6819 72.9812 34.6992C72.9869 34.7165 72.9967 34.7321 73.0097 34.7449C73.0227 34.7576 73.0386 34.7671 73.056 34.7726C73.0734 34.778 73.0918 34.7792 73.1098 34.7761C73.1277 34.773 73.1447 34.7657 73.1593 34.7548ZM80.8248 36.0886C80.7292 36.0886 80.6376 36.1265 80.57 36.1941C80.5024 36.2617 80.4645 36.3533 80.4645 36.4489V37.1388C80.4777 37.2343 80.5283 37.3207 80.6052 37.3789C80.6821 37.4371 80.779 37.4624 80.8746 37.4492C80.9701 37.436 81.0565 37.3854 81.1147 37.3085C81.173 37.2316 81.1982 37.1347 81.185 37.0391V36.4489C81.1861 36.4013 81.1775 36.354 81.1597 36.3098C81.142 36.2656 81.1155 36.2254 81.0818 36.1918C81.0482 36.1581 81.008 36.1316 80.9639 36.1139C80.9197 36.0961 80.8724 36.0875 80.8248 36.0886ZM21.3328 102.64C22.3983 102.985 24.8819 103.913 26.0241 103.775C26.1621 103.775 26.3154 103.637 26.415 103.392C27.1816 101.667 26.6297 92.8976 26.3537 91.2035C26.1621 89.9847 21.7544 88.4746 20.6889 89.3408C19.999 89.9004 20.344 96.3931 20.4206 97.2976C20.6199 99.4823 20.4129 102.342 21.3328 102.64ZM21.0339 89.7471C21.8617 89.1492 25.7021 90.5673 25.8248 91.2802C26.0164 92.4837 26.7293 102.602 25.9628 103.392C24.9739 103.537 22.3523 102.732 21.3635 102.426C20.6659 102.196 20.9035 99.145 20.7886 97.2593C20.7349 95.9868 20.6506 90.9352 21.0339 89.7471ZM75.5049 41.876C75.4858 41.8666 75.4648 41.8617 75.4436 41.8617C75.4223 41.8617 75.4013 41.8666 75.3822 41.876C75.1906 41.945 75.0756 42.1597 75.045 42.474C75.0202 43.2861 75.2928 44.0793 75.8115 44.7046C75.9331 44.8706 76.0869 45.0104 76.2636 45.1157C76.4404 45.221 76.6366 45.2897 76.8404 45.3176C77.0443 45.3455 77.2517 45.332 77.4502 45.2781C77.6488 45.2241 77.8345 45.1308 77.9962 45.0036C78.4582 44.6233 78.8212 44.1367 79.054 43.5854C79.075 43.5425 79.0859 43.4953 79.0859 43.4475C79.0859 43.3996 79.075 43.3525 79.054 43.3095C78.8164 42.9415 78.2491 43.4628 75.5049 41.876ZM75.4359 42.1367C76.2687 42.8458 77.2436 43.3686 78.2951 43.6698C76.6547 46.46 75.0066 42.6963 75.4359 42.1367ZM77.314 40.3353C77.8045 40.4273 79.1613 40.2586 79.4526 39.7604C79.5983 39.5227 79.4526 39.4461 79.1307 38.4649C78.8406 37.6125 78.5001 36.778 78.1112 35.9659C77.9732 35.7513 77.7969 35.9659 77.8965 36.0963C78.1095 37.2715 78.4488 38.4203 78.9084 39.5227C78.3536 39.7823 77.7856 40.0126 77.2066 40.2126C77.2056 40.2277 77.2076 40.2429 77.2124 40.2573C77.2172 40.2716 77.2248 40.2849 77.2348 40.2962C77.2448 40.3076 77.2569 40.317 77.2705 40.3237C77.2841 40.3304 77.2988 40.3343 77.314 40.3353ZM105.584 120.049C108.459 118.224 106.221 116.546 104.32 117.343C103.852 116.492 103.745 116.423 102.786 116.469C97.8115 116.722 75.3439 121.919 75.1293 122.004C73.9948 122.471 76.877 129.24 78.0192 130.129C78.2798 130.328 78.1955 130.367 81.0087 129.815C81.1927 131.486 81.9209 134.414 83.6227 134.506C84.4158 134.361 85.1881 134.119 85.9223 133.785C87.3439 135.2 88.8573 136.518 90.4526 137.733C92.2157 138.914 103.484 125.752 105.17 124.219C105.653 124.058 106.083 123.951 106.029 122.755C107.485 122.486 108.612 121.59 107.838 120.302C107.317 119.52 106.412 119.643 105.584 120.049ZM105.853 117.964C106.167 118.079 106.328 118.201 106.228 118.516C106.022 118.996 105.719 119.429 105.339 119.788C105.136 119.165 104.898 118.553 104.626 117.956C105.023 117.813 105.458 117.816 105.853 117.964ZM97.6965 117.711C97.9801 119.052 98.1718 119.781 98.5321 121.015L93.2199 122.019C92.9143 120.91 92.5588 119.815 92.1544 118.738C93.1585 118.546 96.8763 117.849 97.6965 117.711ZM89.8394 127.944C90.1205 128.907 90.536 129.826 91.0735 130.673C89.6017 131.386 88.2143 132.038 87.0338 132.574C86.6103 131.289 86.0146 130.066 85.2631 128.941L89.8394 127.944ZM87.67 127.944C87.4109 126.612 87.0834 125.295 86.6889 123.997L92.8213 122.67C93.1557 123.969 93.56 125.248 94.0324 126.503C91.9244 126.948 89.7244 127.446 87.67 127.914V127.944ZM90.2227 127.983C90.1383 127.86 89.6171 128.044 95.2589 126.748C95.3586 127.318 95.5696 127.863 95.8798 128.351L91.3878 130.551C91.1211 129.635 90.729 128.76 90.2227 127.952V127.983ZM95.5885 126.664C98.5014 125.99 101.177 125.346 103.024 124.855L96.2554 128.159C96.1301 127.615 95.9067 127.098 95.5962 126.633L95.5885 126.664ZM94.293 126.427C94.0471 125.119 93.735 123.824 93.3578 122.548L98.5934 121.26C98.5934 121.298 98.946 122.479 99.107 122.985C99.1836 123.215 99.8352 125.07 99.8735 125.1C98.2868 125.453 94.4157 126.365 94.2854 126.396L94.293 126.427ZM91.9244 118.815C92.1774 120.21 92.415 121.114 92.6909 122.157L86.5585 123.506C86.1983 122.287 85.953 121.49 85.4241 120.11C86.6199 119.834 91.0045 118.96 91.9321 118.784L91.9244 118.815ZM85.1711 120.156C85.47 121.689 85.6923 122.494 86.0143 123.629C85.5007 123.744 81.3077 124.794 81.3077 124.794C81.1544 124.794 81.2157 125.031 81.369 125.001C81.369 125.001 85.9146 124.158 86.1446 124.104C86.1446 124.104 86.4742 125.422 87.4171 128.006L82.4728 129.109C81.7656 126.436 80.8769 123.813 79.8129 121.26L85.1711 120.156ZM78.2338 129.868C77.0687 128.994 74.4011 122.555 75.2059 122.203C75.2059 122.203 76.9613 121.82 79.5983 121.268C80.2555 123.954 81.1323 126.582 82.2199 129.125C78.1878 130.029 78.3641 129.937 78.2415 129.838L78.2338 129.868ZM83.5997 133.946C82.3042 133.946 81.53 131.148 81.3 129.876C81.3 129.73 80.8937 129.876 84.9028 129.04C85.1021 129.002 84.7878 128.948 85.746 130.941C86.0208 131.568 86.3599 132.164 86.7578 132.72C85.7495 133.203 84.7036 133.603 83.6303 133.916L83.5997 133.946ZM90.7439 137.227C89.1854 136.135 87.6884 134.958 86.2596 133.701C87.5781 133.157 89.0728 132.459 90.3606 131.846C91.3689 133.018 92.5112 134.068 93.7641 134.974C93.2429 135.418 91.4721 137.059 90.7746 137.197L90.7439 137.227ZM93.9864 134.744C92.974 133.613 91.8403 132.598 90.6059 131.716L95.4199 129.347C96.0906 130.036 96.8669 130.613 97.7195 131.056C96.514 132.304 95.2795 133.523 94.0171 134.713L93.9864 134.744ZM97.9801 130.811C97.3408 130.158 96.6132 129.599 95.8185 129.148C99.1146 127.484 101.008 126.473 104.082 124.771C102.717 125.974 99.2526 129.516 98.0108 130.781L97.9801 130.811ZM105.293 123.606C104.963 123.843 100.448 124.947 100.057 125.039C99.5694 122.531 98.8535 120.073 97.9188 117.696C99.4059 117.443 102.349 116.929 103.446 117.052C103.594 117.226 103.722 117.416 103.829 117.619C103.306 117.974 102.873 118.447 102.564 118.999C102.487 119.19 102.687 119.29 102.786 119.198C103.17 118.792 103.618 118.453 104.113 118.194C104.46 118.912 104.762 119.652 105.017 120.409C104.336 120.875 103.722 121.432 103.193 122.065C103.093 122.187 103.124 122.279 103.193 122.318C103.377 122.425 103.392 122.149 105.201 121.076C105.384 121.697 105.487 122.338 105.508 122.985C105.469 123.123 105.446 123.475 105.324 123.575L105.293 123.606ZM107.202 121.551C106.859 121.943 106.428 122.248 105.945 122.44C105.874 121.894 105.764 121.353 105.615 120.823C106.113 120.57 106.887 120.248 107.148 120.716C107.246 120.823 107.307 120.959 107.322 121.104C107.338 121.249 107.306 121.395 107.232 121.521L107.202 121.551Z"
        fill="black"
      />
    </svg>
  );
}
