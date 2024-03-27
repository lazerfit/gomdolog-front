<script setup lang=ts>
import { ref, onMounted } from 'vue';
import type { Ref } from 'vue';
import { useRouter } from 'vue-router';
import BasicToast from './common/BasicToast.vue';
import { useToasterStore } from '@/stores/useToasterStore';

const utterancesContainer: Ref<HTMLDivElement | null> = ref(null);
const router = useRouter();
const toastStore = useToasterStore();

const addUtterancesScript = () => {
  if (utterancesContainer.value !== null) {
    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.setAttribute("repo", "lazerfit/gomdolog-front");
    script.setAttribute("issue-term", "pathname");
    script.setAttribute("theme", "github-light");
    script.setAttribute("crossorigin", "anonymous");
    script.async = true;
    utterancesContainer.value.appendChild(script);
  } else {
    console.error("utterancesContainer is null.");
  }
}

const goBack = () => {
  router.go(-1);
};

const scrollToTop = () => {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  });
};

const linkCopy = () => {
  const url = window.location.href;
  navigator.clipboard.writeText(url)
    .then(() => {
      toastStore.showToast("복사가 완료되었습니다.");
    }).catch((error: string) => {
      console.log('링크 복사 중 오류 발생: ', error);
    })
}


onMounted(() => {
  addUtterancesScript();
});
</script>
<template>
  <div class="container">
    <div class="content-wrapper">
      <div class="post-title">
        <div class="post-title-tags">
          <span>#Vue.js</span>
          <span>#CSS</span>
        </div>
        <div class="title">
          Option API vs Composition API
        </div>
        <div class="date-admin-wrapper">
          <div class="created-date">
            2024년 3월 27일
          </div>
          <div class="admin-wrapper">
            <span>
              <i class="fa-solid fa-pen"></i>
            </span>
            <span>
              <i class="fa-solid fa-trash"></i>
            </span>
          </div>
        </div>
      </div>
      <div class="post-text">
        <p>
          외국인은 국제법과 조약이 정하는 바에 의하여 그 지위가 보장된다. 국회는 국정을 감사하거나 특정한 국정사안에 대하여 조사할 수 있으며, 이에 필요한 서류의 제출 또는 증인의 출석과 증언이나 의견의
          진술을 요구할 수 있다. 사회적 특수계급의 제도는 인정되지 아니하며, 어떠한 형태로도 이를 창설할 수 없다.
        </p>
        <br>
        <p>
          대통령은 법률에서 구체적으로 범위를 정하여 위임받은 사항과 법률을 집행하기 위하여 필요한 사항에 관하여 대통령령을 발할 수 있다. 공무원의 직무상 불법행위로 손해를 받은 국민은 법률이 정하는 바에
          의하여 국가 또는 공공단체에 정당한 배상을 청구할 수 있다. 이 경우 공무원 자신의 책임은 면제되지 아니한다.
        </p>
        <br>
        <p>
          농업생산성의 제고와 농지의 합리적인 이용을 위하거나 불가피한 사정으로 발생하는 농지의 임대차와 위탁경영은 법률이 정하는 바에 의하여 인정된다. 국가안전보장회의는 대통령이 주재한다. 모든 국민은
          종교의
          자유를 가진다. 감사위원은 원장의 제청으로 대통령이 임명하고, 그 임기는 4년으로 하며, 1차에 한하여 중임할 수 있다.
        </p>
        <p>
          국민경제자문회의의 조직·직무범위 기타 필요한 사항은 법률로 정한다. 사법권은 법관으로 구성된 법원에 속한다. 국가는 균형있는 국민경제의 성장 및 안정과 적정한 소득의 분배를 유지하고, 시장의 지배와
          경제력의 남용을 방지하며, 경제주체간의 조화를 통한 경제의 민주화를 위하여 경제에 관한 규제와 조정을 할 수 있다.
        </p>
        <p>
          중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 내부규율에 관한 규칙을 제정할 수 있다. 모든 국민은
          법률이 정하는 바에 의하여 국가기관에 문서로 청원할 권리를 가진다. 국가는 농·어민과 중소기업의 자조조직을 육성하여야 하며, 그 자율적 활동과 발전을 보장한다.

          환경권의 내용과 행사에 관하여는 법률로 정한다. 누구든지 체포 또는 구속을 당한 때에는 적부의 심사를 법원에 청구할 권리를 가진다. 형사피해자는 법률이 정하는 바에 의하여 당해 사건의 재판절차에서
          진술할 수 있다. 국무총리는 대통령을 보좌하며, 행정에 관하여 대통령의 명을 받아 행정각부를 통할한다.

          연소자의 근로는 특별한 보호를 받는다. 일반사면을 명하려면 국회의 동의를 얻어야 한다. 국회의원은 법률이 정하는 직을 겸할 수 없다. 대통령은 취임에 즈음하여 다음의 선서를 한다. 대통령후보자가
          1인일
          때에는 그 득표수가 선거권자 총수의 3분의 1 이상이 아니면 대통령으로 당선될 수 없다. 국가는 평생교육을 진흥하여야 한다.
        </p>
        <br>
        <p>
          각급 선거관리위원회의 조직·직무범위 기타 필요한 사항은 법률로 정한다. 국가는 농업 및 어업을 보호·육성하기 위하여 농·어촌종합개발과 그 지원등 필요한 계획을 수립·시행하여야 한다. 공개하지 아니한
          회의내용의 공표에 관하여는 법률이 정하는 바에 의한다. 대통령은 법률이 정하는 바에 의하여 사면·감형 또는 복권을 명할 수 있다.

          선거에 관한 경비는 법률이 정하는 경우를 제외하고는 정당 또는 후보자에게 부담시킬 수 없다. 법률이 정하는 주요방위산업체에 종사하는 근로자의 단체행동권은 법률이 정하는 바에 의하여 이를 제한하거나
          인정하지 아니할 수 있다. 국무회의는 정부의 권한에 속하는 중요한 정책을 심의한다. 대통령은 법률안의 일부에 대하여 또는 법률안을 수정하여 재의를 요구할 수 없다.

          대통령으로 선거될 수 있는 자는 국회의원의 피선거권이 있고 선거일 현재 40세에 달하여야 한다. 통신·방송의 시설기준과 신문의 기능을 보장하기 위하여 필요한 사항은 법률로 정한다. 공무원의 신분과
          정치적 중립성은 법률이 정하는 바에 의하여 보장된다. 탄핵소추의 의결을 받은 자는 탄핵심판이 있을 때까지 그 권한행사가 정지된다.

          헌법재판소 재판관의 임기는 6년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다. 공공필요에 의한 재산권의 수용·사용 또는 제한 및 그에 대한 보상은 법률로써 하되, 정당한 보상을 지급하여야
          한다. 국군은 국가의 안전보장과 국토방위의 신성한 의무를 수행함을 사명으로 하며, 그 정치적 중립성은 준수된다.
        </p>
        <br>
        <p>
          모든 국민은 통신의 비밀을 침해받지 아니한다. 대통령은 내우·외환·천재·지변 또는 중대한 재정·경제상의 위기에 있어서 국가의 안전보장 또는 공공의 안녕질서를 유지하기 위하여 긴급한 조치가 필요하고
          국회의 집회를 기다릴 여유가 없을 때에 한하여 최소한으로 필요한 재정·경제상의 처분을 하거나 이에 관하여 법률의 효력을 가지는 명령을 발할 수 있다.

          군사재판을 관할하기 위하여 특별법원으로서 군사법원을 둘 수 있다. 군사법원의 조직·권한 및 재판관의 자격은 법률로 정한다. 모든 국민은 근로의 의무를 진다. 국가는 근로의 의무의 내용과 조건을
          민주주의원칙에 따라 법률로 정한다. 감사원은 원장을 포함한 5인 이상 11인 이하의 감사위원으로 구성한다.

          공무원은 국민전체에 대한 봉사자이며, 국민에 대하여 책임을 진다. 법관은 헌법과 법률에 의하여 그 양심에 따라 독립하여 심판한다. 대법원은 법률에 저촉되지 아니하는 범위안에서 소송에 관한 절차,
          법원의
          내부규율과 사무처리에 관한 규칙을 제정할 수 있다. 국회는 헌법개정안이 공고된 날로부터 60일 이내에 의결하여야 하며, 국회의 의결은 재적의원 3분의 2 이상의 찬성을 얻어야 한다.

          모든 국민은 능력에 따라 균등하게 교육을 받을 권리를 가진다. 국가는 사회보장·사회복지의 증진에 노력할 의무를 진다. 국가는 국민 모두의 생산 및 생활의 기반이 되는 국토의 효율적이고 균형있는
          이용·개발과 보전을 위하여 법률이 정하는 바에 의하여 그에 관한 필요한 제한과 의무를 과할 수 있다.

          제2항의 재판관중 3인은 국회에서 선출하는 자를, 3인은 대법원장이 지명하는 자를 임명한다. 헌법재판소는 법관의 자격을 가진 9인의 재판관으로 구성하며, 재판관은 대통령이 임명한다. 혼인과
          가족생활은
          개인의 존엄과 양성의 평등을 기초로 성립되고 유지되어야 하며, 국가는 이를 보장한다. 사면·감형 및 복권에 관한 사항은 법률로 정한다.

          대법원장과 대법관이 아닌 법관의 임기는 10년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다. 대통령은 조약을 체결·비준하고, 외교사절을 신임·접수 또는 파견하며, 선전포고와 강화를 한다.
          국가는 과학기술의 혁신과 정보 및 인력의 개발을 통하여 국민경제의 발전에 노력하여야 한다. 훈장등의 영전은 이를 받은 자에게만 효력이 있고, 어떠한 특권도 이에 따르지 아니한다.
        </p>
        <br>
        <p>
          대통령은 필요하다고 인정할 때에는 외교·국방·통일 기타 국가안위에 관한 중요정책을 국민투표에 붙일 수 있다. 대통령은 헌법과 법률이 정하는 바에 의하여 국군을 통수한다. 국가의 세입·세출의 결산,
          국가
          및 법률이 정한 단체의 회계검사와 행정기관 및 공무원의 직무에 관한 감찰을 하기 위하여 대통령 소속하에 감사원을 둔다.

          재산권의 행사는 공공복리에 적합하도록 하여야 한다. 모든 국민은 보건에 관하여 국가의 보호를 받는다. 위원은 탄핵 또는 금고 이상의 형의 선고에 의하지 아니하고는 파면되지 아니한다. 선거에 있어서
          최고득표자가 2인 이상인 때에는 국회의 재적의원 과반수가 출석한 공개회의에서 다수표를 얻은 자를 당선자로 한다.

          계엄을 선포한 때에는 대통령은 지체없이 국회에 통고하여야 한다. 누구든지 병역의무의 이행으로 인하여 불이익한 처우를 받지 아니한다. 국회는 상호원조 또는 안전보장에 관한 조약, 중요한 국제조직에
          관한
          조약, 우호통상항해조약, 주권의 제약에 관한 조약, 강화조약, 국가나 국민에게 중대한 재정적 부담을 지우는 조약 또는 입법사항에 관한 조약의 체결·비준에 대한 동의권을 가진다.
        </p>
        <img src="@/assets/img/beach2.jpg" alt="">
      </div>
      <div class="sns">
        <div class="back-btn">
          <i class="fa-solid fa-chevron-left" @click="goBack"></i>
        </div>
        <div class="wrapper">
          <span>
            <i class="fa-brands fa-x-twitter"></i>
          </span>
          <span>
            <i class="fa-brands fa-facebook"></i>
          </span>
          <span>
            <i class="fa-regular fa-comment"></i>
          </span>
          <span>
            <basic-toast />
            <i class="fa-solid fa-paperclip" @click="linkCopy"></i>
          </span>
        </div>
        <div class="up-btn">
          <i class="fa-solid fa-chevron-up" @click="scrollToTop"></i>
        </div>
      </div>
      <div class="comment">
        <div ref="utterancesContainer"></div>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.container {
  width: $desktop-width;
  margin: px-to-rem(40) auto;
  display: flex;
  justify-content: center;

  .content-wrapper {
    width: px-to-rem(900);

    .post-title {
      text-align: center;
      font-weight: 500;
      font-size: px-to-rem(35);
      font-family: $secondary-font;

      .post-title-tags {
        span {
          font-size: 1rem;
          color: #ffda79;
          margin-right: px-to-rem(7);
        }
      }

      .date-admin-wrapper {
        font-size: 0.8rem;
        margin-top: px-to-rem(10);
        color: $light-black;
        display: flex;
        justify-content: center;

        .admin-wrapper {
          margin-left: px-to-rem(7);

          span {
            margin-right: px-to-rem(10);

            i {
              cursor: pointer;
              transition: all .3s ease;

              &:hover {
                color: $black-forest;
              }
            }
          }
        }
      }
    }

    .post-text {
      margin: px-to-rem(30) auto;
      font-size: px-to-rem(16);
      line-height: px-to-rem(31);


      img {
        width: 100%;
        border-radius: px-to-rem(10);
        margin: px-to-rem(30) auto;
      }
    }

    .sns {
      display: flex;
      justify-content: space-between;

      .wrapper {
        transition: all .3s ease;

        &:hover span i {
          opacity: .5;
        }

        span {

          i {
            transition: all .3s ease;

            &:hover {
              transform: translateY(-5px) scale(1.1);
              opacity: 1;
            }
          }
        }
      }

      .back-btn {
        cursor: pointer;
        color: $light-black;

        .fa-chevron-left {
          font-size: px-to-rem(17);

          &:hover {
            animation: back-btn 1.1s linear infinite;
          }
        }
      }

      .up-btn {
        cursor: pointer;
        color: $light-black;

        .fa-chevron-up {
          font-size: px-to-rem(17);

          &:hover {
            animation: up-btn 1.1s linear infinite;
          }
        }
      }

      span {
        font-size: px-to-rem(22);
        margin-right: px-to-rem(7);
        cursor: pointer;

      }
    }

    .comment {
      margin-top: px-to-rem(40);
    }
  }
}
</style>